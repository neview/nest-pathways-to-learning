import { Controller, Get, Inject, Param } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('person2') private readonly person2: { name: string, desc: string }
  ) { }


  @Get()
  getHello(): string {
    debugger
    console.log('this.person2', this.person2)
    return this.appService.getHello();
  }
}

