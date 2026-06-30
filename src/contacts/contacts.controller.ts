import { Controller, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller() 
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('users/:userId/contacts')
  @ApiOperation({ summary: 'Menambahkan kontak baru ke user' })
  create(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() createContactDto: CreateContactDto,
  ) {
    return this.contactsService.create(userId, createContactDto);
  }

  @Delete('contacts/:id')
  @ApiOperation({ summary: 'Menghapus satu kontak' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.remove(id);
  }
}