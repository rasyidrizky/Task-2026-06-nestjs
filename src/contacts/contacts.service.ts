import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Contact, Prisma } from '@prisma/client';
import { ICreateContact, IUpdateContact } from './interfaces/contact.interface';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }

  async create(userId: number, data: ICreateContact): Promise<Contact> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    return this.prisma.contact.create({
      data: { ...data, userId },
    });
  }

  async update(id: number, data: IUpdateContact): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact) throw new NotFoundException('Contact not found');
    return this.prisma.contact.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact) throw new NotFoundException('Contact not found');
    return this.prisma.contact.delete({ where: { id } });
  }
}