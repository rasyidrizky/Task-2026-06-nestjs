import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<({
        contacts: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            name: string;
            phone_number: string;
            userId: number;
        }[];
    } & {
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        contacts: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            name: string;
            phone_number: string;
            userId: number;
        }[];
    } & {
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        username: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
