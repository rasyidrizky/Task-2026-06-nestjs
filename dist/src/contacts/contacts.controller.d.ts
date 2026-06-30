import { ContactsService } from './contacts.service';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    update(id: number, updateContactDto: UpdateContactDto): Promise<{
        name: string;
        phone_number: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        phone_number: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
}
