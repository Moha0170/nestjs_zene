import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMusicDto {
    @IsNotEmpty()
    @IsString()
    cim: string;

    @IsNotEmpty()
    @IsString()
    auth: string;

    @IsNumber()
    @IsNotEmpty()
    length: number;
    
    @IsNotEmpty()
    @IsNumber()
    price: number;
}
