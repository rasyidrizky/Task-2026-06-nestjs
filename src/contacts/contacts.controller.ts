import { Controller, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller() 
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Put('contacts/:id')
  @ApiOperation({ summary: 'Update contact details' })
  @ApiParam({ name: 'id', type: 'integer', required: true })
  @ApiBody({ type: UpdateContactDto, required: true })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Contact not found' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete('contacts/:id')
  @ApiOperation({ summary: 'Delete contact by ID' })
  @ApiParam({ name: 'id', type: 'integer', required: true })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 404, description: 'Contact not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.remove(id);
  }
}