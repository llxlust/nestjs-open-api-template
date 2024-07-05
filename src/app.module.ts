import { Module } from '@nestjs/common';
import { SampleMvcRouteModule } from './sample-mvc-route/sample-mvc-route.module';

@Module({
  imports: [SampleMvcRouteModule],
})
export class AppModule {}
