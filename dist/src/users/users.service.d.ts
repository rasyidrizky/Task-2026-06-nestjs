import { PrismaService } from '../prisma/prisma.service';
import { ICreateUser, IUpdateUser } from './interfaces/user.interface';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ICreateUser): Promise<{
        id: number;
        email: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
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
    update(id: number, data: IUpdateUser): Promise<{
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
}
