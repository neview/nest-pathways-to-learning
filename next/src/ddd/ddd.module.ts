import { Module, OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';

@Module({
  controllers: [DddController],
  providers: [DddService]
})
export class DddModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {

  onModuleDestroy() {
    console.log('DddModule onModuleDestroy')
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('DddModule beforeApplicationShutdown')
  }
  onApplicationShutdown(signal?: string) {
    console.log('DddModule onApplicationShutdown')
  }

  onModuleInit() {
    console.log('DddModules OnModuleInit')
  }
  onApplicationBootstrap() {
    console.log('DddModules OnApplicationBootstrap')
  }
}
