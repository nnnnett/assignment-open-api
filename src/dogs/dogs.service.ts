import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { DogResponseDto, BreedResponseDto } from './dto/dog.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DogsService {
  private readonly baseUrl = 'https://dog.ceo/api';

  constructor(private readonly httpService: HttpService) {}

  async getRandomDog(): Promise<DogResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.get<DogResponseDto>(
        `${this.baseUrl}/breeds/image/random`,
      ),
    );
    return data;
  }

  async getAllBreeds(): Promise<BreedResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.get<BreedResponseDto>(`${this.baseUrl}/breeds/list/all`),
    );
    return data;
  }

  async getBreedImages(breed: string): Promise<DogResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.get<DogResponseDto>(
        `${this.baseUrl}/breed/${breed}/images/random`,
      ),
    );
    return data;
  }
}
