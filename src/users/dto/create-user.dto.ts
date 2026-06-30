import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'string' })
  @IsString()
  @IsNotEmpty()
  username!: string;

  @ApiProperty({ example: 'string' })
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}