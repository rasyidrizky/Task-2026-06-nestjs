import { PrismaService } from '../prisma/prisma.service';
import { ICreateContact, IUpdateContact } from './interfaces/contact.interface';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: ICreateContact): Promise<{
        name: string;
        phone_number: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    update(id: number, data: IUpdateContact): Promise<{
        name: string;
        phone_number: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        phone_number: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
}
