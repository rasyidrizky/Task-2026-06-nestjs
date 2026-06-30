import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: Omit<Prisma.ContactCreateInput, 'user'>): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        phone_number: string;
        userId: number;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        name: string;
        phone_number: string;
        userId: number;
    }>;
}
