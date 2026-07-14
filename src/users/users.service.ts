import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ICreateUser, IUpdateUser } from './interfaces/user.interface';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(data: ICreateUser): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) throw new ConflictException('Email already registered');
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { contacts: true } });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { contacts: true },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, data: IUpdateUser): Promise<User> {
    await this.findOne(id);
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<User> {
    await this.findOne(id);
    return this.prisma.user.delete({ where: { id } });
  }
}