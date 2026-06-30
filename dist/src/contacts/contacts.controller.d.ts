import { ContactsService } from './contacts.service';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    update(id: number, updateContactDto: UpdateContactDto): Promise<{
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
