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
            createdAt: Date;
            updatedAt: Date;
            id: number;
            userId: number;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        username: string;
    })[]>;
    create(createUserDto: CreateUserDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        username: string;
    }>;
    findOne(id: number): Promise<{
        contacts: {
            name: string;
            phone_number: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            userId: number;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        username: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        username: string;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        email: string;
        username: string;
    }>;
    createContact(userId: number, createContactDto: CreateContactDto): Promise<{
        name: string;
        phone_number: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
}
