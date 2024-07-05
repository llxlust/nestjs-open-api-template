import { Module } from '@nestjs/common';
import { SampleMvcRouteController } from './sample-mvc-route.controller';
import { SampleMvcRouteService } from './sample-mvc-route.service';

@Module({
  controllers: [SampleMvcRouteController],
  providers: [SampleMvcRouteService]
})
export class SampleMvcRouteModule {}
