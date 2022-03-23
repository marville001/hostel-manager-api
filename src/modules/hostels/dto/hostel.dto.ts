import { IsNotEmpty, MinLength, IsEmail, } from 'class-validator';

export class HostelDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
	readonly floors: number;
	
	@IsNotEmpty()
	readonly rooms: number;
	
	@IsNotEmpty()
	readonly price: number;
	
	@IsNotEmpty()
	readonly location: string;
	
	@IsNotEmpty()
    readonly description: string;
}