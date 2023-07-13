import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tool } from '../entities/tool.entity';
import { GetToolByIdServiceInterface } from '../interfaces/get-tool-by-id-service.interface';

@Injectable()
export class GetToolByIdService implements GetToolByIdServiceInterface {
  constructor(
    @InjectRepository(Tool)
    private readonly toolRepository: Repository<Tool>,
  ) {}

  /**
   * Retrieves a Tool entity from the database by a given toolId
   * @returns A Promise that resolves to a Tool entity
   */
  async getToolById(toolId: string): Promise<Tool> {
    // Retrieve the tool entity with the specified ID from the database
    const tool = await this.toolRepository.findOne({ where: { id: toolId }, relations: ['checkedOutBy'] });

    // Throw an error if the tool does not exist
    if (!tool) {
      throw new Error('Tool not found');
    }

    // Return the tool entity to the controller
    return tool;
  }
}