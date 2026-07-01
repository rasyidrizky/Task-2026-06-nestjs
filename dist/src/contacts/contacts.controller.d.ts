import { ContactsService } from './contacts.service';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    update(id: number, updateContactDto: UpdateContactDto): Promise<{
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
