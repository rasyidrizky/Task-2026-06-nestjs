import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            phone_number: string;
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
}
