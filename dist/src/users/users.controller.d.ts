import { UsersService } from './users.service';
import { ContactsService } from '../contacts/contacts.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateContactDto } from '../contacts/dto/create-contact.dto';
export declare class UsersController {
    private readonly usersService;
    private readonly contactsService;
    constructor(usersService: UsersService, contactsService: ContactsService);
    findAll(): Promise<({
        contacts: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            phone_number: string;
            userId: number;
        }[];
    } & {
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: number): Promise<{
        contacts: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            phone_number: string;
            userId: number;
        }[];
    } & {
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createContact(userId: number, createContactDto: CreateContactDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone_number: string;
        userId: number;
    }>;
}
