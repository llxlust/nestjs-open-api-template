import { Test, TestingModule } from '@nestjs/testing';
import { SampleMvcRouteController } from './sample-mvc-route.controller';

describe('SampleMvcRouteController', () => {
  let controller: SampleMvcRouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleMvcRouteController],
    }).compile();

    controller = module.get<SampleMvcRouteController>(SampleMvcRouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
