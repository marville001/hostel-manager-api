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
  readonly price: number;

  @IsNotEmpty()
  readonly location: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly ownerId: number;
}
