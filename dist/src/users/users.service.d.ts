import { PrismaService } from '../prisma/prisma.service';
import { ICreateUser, IUpdateUser } from './interfaces/user.interface';
import { User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ICreateUser): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, data: IUpdateUser): Promise<User>;
    remove(id: number): Promise<User>;
}
