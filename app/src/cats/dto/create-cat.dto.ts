import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  breed: string;

  @IsPositive()
  @IsNumber()
  age: number;

  @IsString()
  name: string;
}
