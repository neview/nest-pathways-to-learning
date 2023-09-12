import { Module, OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [CccController],
  providers: [CccService]
})
export class CccModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {

  constructor(private moduleRef: ModuleRef) {

  }

  onModuleInit() {
    console.log('CccModules OnModuleInit')
  }
  onApplicationBootstrap() {
    const cccService = this.moduleRef.get<CccService>(CccService)
    console.log('-----------------', cccService.findAll())

    console.log('CccModules OnApplicationBootstrap')
  }
  onModuleDestroy() {
    console.log('CccModule onModuleDestroy')
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('CccModule beforeApplicationShutdown')
  }
  onApplicationShutdown(signal?: string) {
    console.log('CccModule onApplicationShutdown')
  }


}
