export class DogResponseDto {
  message: string;
  status: string;
}

export class BreedResponseDto {
  message: { [key: string]: string[] };
  status: string;
} 