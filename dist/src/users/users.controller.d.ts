import { UsersService } from './users.service';
import { ContactsService } from '../contacts/contacts.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateContactDto } from '../contacts/dto/create-contact.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly contactsService;
    constructor(usersService: UsersService, contactsService: ContactsService);
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
    }[]>;
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
    }>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        username: string;
    }>;
    createContact(userId: number, createContactDto: CreateContactDto): Promise<{
        name: string;
        id: number;
        phone_number: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
