import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tool } from '../entities/tool.entity';
import { GetAvailableToolsServiceInterface } from '../interfaces/get-available-tools-service.interface';

@Injectable()
export class GetAvailableToolsService implements GetAvailableToolsServiceInterface {
  constructor(
    @InjectRepository(Tool)
    private readonly toolRepository: Repository<Tool>,
  ) {}

  /**
   * Retrieves all available Tool entities from the database
   * @returns A Promise that resolves to a list of Tool entities
   */
  async getAvailableTools(): Promise<Tool[]> {
    // Retrieve all available tools from the database
    const availableTools = await this.toolRepository.find({
      where: {
        checkedOutBy: null,
      },
    });
    // Return a list of tool entities to the controller
    return availableTools;
  }
}