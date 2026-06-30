import { Controller, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller() 
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @ApiTags('Users')
  @Post('users/:userId/contacts')
  @ApiOperation({ summary: 'Add a new contact to a user' })
  @ApiParam({ name: 'userId', type: 'integer', required: true, description: 'Owner User ID' })
  @ApiBody({ type: CreateContactDto, required: true })
  @ApiResponse({ status: 201, description: 'Created' })
  @ApiResponse({ status: 404, description: 'User not found' })
  create(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() createContactDto: CreateContactDto,
  ) {
    return this.contactsService.create(userId, createContactDto);
  }

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