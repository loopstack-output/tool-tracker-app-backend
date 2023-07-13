import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tool } from '../entities/tool.entity';
import { GetAllCheckedOutToolsForUserServiceInterface } from '../interfaces/get-all-checked-out-tools-for-user-service.interface';

@Injectable()
export class GetAllCheckedOutToolsForUserService implements GetAllCheckedOutToolsForUserServiceInterface {
  constructor(
    @InjectRepository(Tool)
    private readonly toolRepository: Repository<Tool>,
  ) {}

  async getAllCheckedOutToolsForUser(userId: string): Promise<Tool[]> {
    // Retrieve all tools checked out by the authenticated user from the database (service)
    const tools = await this.toolRepository.find({
      where: {
        checkedOutBy: {
          id: userId,
        },
      },
    });
    // Return a list of tool entities to the controller (service)
    return tools;
  }
}