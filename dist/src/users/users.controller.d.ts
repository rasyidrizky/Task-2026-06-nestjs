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
            name: string;
            phone_number: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        }[];
    } & {
        id: number;
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: number): Promise<{
        contacts: {
            name: string;
            phone_number: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        }[];
    } & {
        id: number;
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createContact(userId: number, createContactDto: CreateContactDto): Promise<{
        name: string;
        phone_number: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
}
