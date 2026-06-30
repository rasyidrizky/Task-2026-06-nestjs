import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(userId: number, createContactDto: CreateContactDto): Promise<{
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
