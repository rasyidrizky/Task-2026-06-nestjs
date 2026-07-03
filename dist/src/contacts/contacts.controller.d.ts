import { ContactsService } from './contacts.service';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    update(id: number, updateContactDto: UpdateContactDto): Promise<{
        name: string;
        id: number;
        phone_number: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        name: string;
        id: number;
        phone_number: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
