import { Test, TestingModule } from '@nestjs/testing';
import { AWS_BUCKET } from '../../../src/config/app.config';
import { S3Service } from './s3.service';

describe('S3Service', () => {
  let service: S3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3Service],
    }).compile();

    service = module.get<S3Service>(S3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    // This is an example to get data from `app.config` in tests.
    // That doesn't mean you need to access data in there.
    expect(AWS_BUCKET).toBeDefined();
  });
});
