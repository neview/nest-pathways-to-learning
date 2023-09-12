import { Controller, Param, ParseUUIDPipe, ParseEnumPipe, Get, HttpException, HttpStatus, ParseArrayPipe, ParseFloatPipe, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Query('aa', ParseIntPipe) aa: string): string {
    // return this.appService.getHello();
    return aa + 1;
  }

  @Get('aa')
  aa(@Query('aa', new ParseIntPipe({
    errorHttpStatusCode: HttpStatus.NOT_FOUND
  })) aa: string): string {
    // return this.appService.getHello();
    return aa + 1;
  }

  @Get('bb')
  bb(@Query('bb', new ParseIntPipe({
    exceptionFactory: (msg) => {
      console.log(msg);
      throw new HttpException('xxx' + msg, HttpStatus.NOT_IMPLEMENTED)
    }
  })) aa: string): string {
    // return this.appService.getHello();
    return aa + 1;
  }

  @Get('cc')
  cc(@Query('cc', ParseFloatPipe) cc: number) {
    // return this.appService.getHello();
    return cc + 1;
  }

  @Get('ee')
  // ee(@Query('ee', ParseArrayPipe) ee: Array<number>) {
  //   // return this.appService.getHello();
  //   return ee.reduce((total, item) => total + item, 0)
  // }
  ee(@Query('ee', new ParseArrayPipe({
    items: Number
  })) ee: Array<number>) {
    // return this.appService.getHello();
    return ee.reduce((total, item) => total + item, 0)
  }

  @Get('ff')
  ff(@Query('ff', new ParseArrayPipe({
    separator: '..',
    optional: true
  })) ff: Array<string>) {
    // return this.appService.getHello();
    return ff;
  }

  //   enum Ggg {
  //   AAA = '111',
  //   BBB = '222',
  //   ccc = '333'
  // }

  // @Get('gg/:enum')
  // gg(@Param('enum', new ParseEnumPipe(Ggg)) e: Ggg) {
  //   // return this.appService.getHello();
  //   return e;
  // }

  @Get('hh/:uuid')
  hh(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    // return this.appService.getHello();
    return uuid;
  }

  @Get('nnn/:bbb')
  nn(@Query('aaa', AaaPipe) aaa: string, @Param('bbb', AaaPipe) bbb: number) {
    // return this.appService.getHello();
    return aaa + bbb;
  }
}
