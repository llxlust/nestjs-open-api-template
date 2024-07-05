import { Test, TestingModule } from '@nestjs/testing';
import { SampleMvcRouteService } from './sample-mvc-route.service';

describe('SampleMvcRouteService', () => {
  let service: SampleMvcRouteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleMvcRouteService],
    }).compile();

    service = module.get<SampleMvcRouteService>(SampleMvcRouteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
