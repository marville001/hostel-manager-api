import { IsNotEmpty, IsNumber } from 'class-validator';

export class HostelDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly floors: number;

  @IsNumber()
  @IsNotEmpty()
  readonly rooms: number;

  @IsNumber()
  @IsNotEmpty()
  readonly rent: number;

  @IsNumber()
  readonly deposit: number = 0;

  @IsNotEmpty()
  readonly location: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly ownerId: number;
}
