import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<{
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<({
        contacts: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            name: string;
            phone_number: string;
            userId: number;
        }[];
    } & {
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        contacts: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            name: string;
            phone_number: string;
            userId: number;
        }[];
    } & {
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
