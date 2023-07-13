import { Injectable } from '@nestjs/common';
import { Tool } from '../entities/tool.entity';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckOutToolForUserServiceInterface } from '../interfaces/check-out-tool-for-user-service.interface';

@Injectable()
export class CheckOutToolForUserService implements CheckOutToolForUserServiceInterface {
  constructor(
    @InjectRepository(Tool)
    private readonly toolRepository: Repository<Tool>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Checks out a tool for a user
   * @param toolId The ID of the tool to be checked out
   * @param userId The ID of the user checking out the tool
   * @returns A Promise that resolves to the updated Tool entity
   */
  async checkOutToolForUser(toolId: string, userId: string): Promise<Tool> {
    // Retrieve the tool entity with the specified ID from the database
    const tool = await this.toolRepository.findOne({ where: { id: toolId }, relations: ['checkedOutBy'] });

    // Throw an error if the tool does not exist
    if (!tool) {
      throw new Error('Tool not found');
    }

    // Throw an error if the tool is already checked out
    if (tool.checkedOutBy) {
      throw new Error('Tool already checked out');
    }

    // Retrieve the user entity with the specified ID from the database
    const user = await this.userRepository.findOne({ where: { id: userId } });

    // Throw an error if the user does not exist
    if (!user) {
      throw new Error('User not found');
    }

    // Update the tool entity with the user who checked it out and the check-out date
    tool.checkedOutBy = user;
    tool.checkOutDate = new Date();

    // Save the updated tool entity to the database
    await this.toolRepository.save(tool);

    // Return the updated tool entity to the controller
    return tool;
  }
}