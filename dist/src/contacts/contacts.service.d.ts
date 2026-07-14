import { PrismaService } from '../prisma/prisma.service';
import { Contact } from '@prisma/client';
import { ICreateContact, IUpdateContact } from './interfaces/contact.interface';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: ICreateContact): Promise<Contact>;
    update(id: number, data: IUpdateContact): Promise<Contact>;
    remove(id: number): Promise<Contact>;
}
