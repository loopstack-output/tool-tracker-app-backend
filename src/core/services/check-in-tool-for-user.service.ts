import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tool } from '../entities/tool.entity';
import { User } from '../entities/user.entity';
import { CheckInToolForUserServiceInterface } from '../interfaces/check-in-tool-for-user-service.interface';

@Injectable()
export class CheckInToolForUserService implements CheckInToolForUserServiceInterface {
  constructor(
    @InjectRepository(Tool)
    private readonly toolRepository: Repository<Tool>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Checks in a tool for a given user
   * @param toolId The ID of the tool to check in
   * @param userId The ID of the user checking in the tool
   * @returns A Promise that resolves to the updated Tool entity
   */
  async checkInToolForUser(toolId: string, userId: string): Promise<Tool> {
    // Retrieve the tool entity with the specified ID from the database
    const tool = await this.toolRepository.findOne({ where: { id: toolId }, relations: ['checkedOutBy'] });

    // Throw an error if the tool does not exist
    if (!tool) {
      throw new Error('Tool not found');
    }

    // Throw an error if the tool is not checked out by the authenticated user
    if (!tool.checkedOutBy || tool.checkedOutBy.id !== userId) {
      throw new Error('Tool is not checked out by the authenticated user');
    }

    // Update the tool entity with the check-in date and remove the user who checked it out
    tool.checkInDate = new Date();
    tool.checkedOutBy = null;

    // Save the updated tool entity to the database
    const updatedTool = await this.toolRepository.save(tool);

    // Return the updated tool entity to the controller
    return updatedTool;
  }
}