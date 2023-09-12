import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { url } from 'inspector';

// @Controller('person')
// export class PersonController {
//   constructor(private readonly personService: PersonService) { }

//   @Post()
//   create(@Body() createPersonDto: CreatePersonDto) {
//     return this.personService.create(createPersonDto);
//   }

//   @Get()
//   findAll() {
//     return this.personService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.personService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
//     return this.personService.update(+id, updatePersonDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.personService.remove(+id);
//   }
// }

@Controller('api/person')
export class PersonController {

  // query 方式
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }

  // url param 方式
  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `received: id=${id}`
  }

  // form urlencoded + json 方式
  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`
  }

  // form data 方式
  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }))
  body2(@Body() createPersonDto: CreatePersonDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`
  }
}

