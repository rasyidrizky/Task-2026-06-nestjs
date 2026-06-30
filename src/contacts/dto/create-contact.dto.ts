import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ example: 'Budi' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: '081234567890' })
  @IsString()
  @Matches(/^08\d{8,12}$/, { message: 'Harus diawali 08 dan 10-14 digit' })
  phone_number!: string;
}