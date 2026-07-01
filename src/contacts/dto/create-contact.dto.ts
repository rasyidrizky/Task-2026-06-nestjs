import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ example: 'string' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'string' })
  @IsString()
  @Matches(/^08\d{8,12}$/, { message: 'Phone number must start with 08 and be 10–14 digits long' })
  phone_number!: string;
}