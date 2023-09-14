import { Controller, Get, UseInterceptors, Post, UploadedFile, Body, UploadedFiles } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';

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
}
