import { Controller, Get, MaxFileSizeValidator, HttpException, FileTypeValidator, UseInterceptors, Post, UploadedFile, Body, UploadedFiles, ParseFilePipe } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { FileSizeValidationPipePipe } from './file-size-validation-pipe.pipe';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('aaa')
  @UseInterceptors(FileInterceptor('aaa', {
    dest: 'uploads'
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('body', body)
    console.log('file', file)
  }

  @Post('bbb')
  @UseInterceptors(FilesInterceptor('bbb', 3, {
    dest: 'uploads'
  }))
  uploadFiles(@UploadedFiles() file: Array<Express.Multer.File>, @Body() body) {
    console.log('body', body)
    console.log('file', file)
  }

  @Post('ccc')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'aaa', maxCount: 2 },
    { name: 'bbb', maxCount: 3 },
  ], {
    dest: 'uploads'
  }))
  uploadFileFields(@UploadedFiles() files: { aaa?: Express.Multer.File[], bbb?: Express.Multer.File[] }, @Body() body) {
    console.log('body', body);
    console.log('files', files);
  }

  @Post('ddd')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads'
  }))
  uploadAnyFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body) {
    console.log('body', body);
    console.log('files', files);
  }

  @Post('eee')
  @UseInterceptors(FileInterceptor('eee', {
    dest: 'uploads'
  }))
  uploadAnyFile2(@UploadedFile(FileSizeValidationPipePipe) files: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('files', files);
  }

  @Post('fff')
  @UseInterceptors(FileInterceptor('aaa', {
    dest: 'uploads'
  }))
  uploadFile3(@UploadedFile(new ParseFilePipe({
    exceptionFactory: err => {
      throw new HttpException('xxx' + err, 404)
    },
    validators: [
      new MaxFileSizeValidator({ maxSize: 1000 }),
      new FileTypeValidator({ fileType: 'image/jpeg' }),
    ],
  })) file: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('file', file);
  }
}
