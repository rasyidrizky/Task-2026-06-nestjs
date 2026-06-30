import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ICreateContact, IUpdateContact } from './interfaces/contact.interface';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }

  async create(userId: number, data: Omit<Prisma.ContactCreateInput, 'user'>) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User tidak ditemukan');

    return this.prisma.contact.create({
      data: { ...data, userId },
    });
  }

  async update(id: number, data: IUpdateContact) {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact) throw new NotFoundException('Contact not found');
    return this.prisma.contact.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const contact = await this.prisma.contact.findUnique({ where: { id } });
    if (!contact) throw new NotFoundException('Kontak tidak ditemukan');
    return this.prisma.contact.delete({ where: { id } });
  }
}