import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ContactsModule } from '../contacts/contacts.module';

@Module({
  imports: [PrismaModule, ContactsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}