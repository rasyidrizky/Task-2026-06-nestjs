import { PrismaService } from '../prisma/prisma.service';
import { ICreateContact, IUpdateContact } from './interfaces/contact.interface';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: ICreateContact): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone_number: string;
        userId: number;
    }>;
    update(id: number, data: IUpdateContact): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone_number: string;
        userId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone_number: string;
        userId: number;
    }>;
}
