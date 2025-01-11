import { Controller, Get, Param } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogResponseDto, BreedResponseDto } from './dto/dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get('random')
  getRandomDog(): Promise<DogResponseDto> {
    return this.dogsService.getRandomDog();
  }

  @Get('breeds')
  getAllBreeds(): Promise<BreedResponseDto> {
    return this.dogsService.getAllBreeds();
  }

  @Get('breed/:breed')
  getBreedImages(@Param('breed') breed: string): Promise<DogResponseDto> {
    return this.dogsService.getBreedImages(breed);
  }
}
