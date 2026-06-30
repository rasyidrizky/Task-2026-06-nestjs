"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
const common_1 = require("@nestjs/common");
const contacts_service_1 = require("./contacts.service");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const update_contact_dto_1 = require("./dto/update-contact.dto");
const swagger_1 = require("@nestjs/swagger");
let ContactsController = class ContactsController {
    contactsService;
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    create(userId, createContactDto) {
        return this.contactsService.create(userId, createContactDto);
    }
    update(id, updateContactDto) {
        return this.contactsService.update(id, updateContactDto);
    }
    remove(id) {
        return this.contactsService.remove(id);
    }
};
exports.ContactsController = ContactsController;
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Post)('users/:userId/contacts'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a new contact to a user' }),
    (0, swagger_1.ApiParam)({ name: 'userId', type: 'integer', required: true, description: 'Owner User ID' }),
    (0, swagger_1.ApiBody)({ type: create_contact_dto_1.CreateContactDto, required: true }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Created' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('contacts/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update contact details' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'integer', required: true }),
    (0, swagger_1.ApiBody)({ type: update_contact_dto_1.UpdateContactDto, required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Contact not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_contact_dto_1.UpdateContactDto]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('contacts/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete contact by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'integer', required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'OK' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Contact not found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "remove", null);
exports.ContactsController = ContactsController = __decorate([
    (0, swagger_1.ApiTags)('Contacts'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
//# sourceMappingURL=contacts.controller.js.map