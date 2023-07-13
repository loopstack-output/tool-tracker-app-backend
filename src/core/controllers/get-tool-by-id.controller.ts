import { Controller, Get, Param } from '@nestjs/common';
import { GetToolByIdService } from '../services/get-tool-by-id.service';
import { Tool } from '../entities/tool.entity';

@Controller('api/tools')
export class GetToolByIdController {
  constructor(private readonly getToolByIdService: GetToolByIdService) {}

  /**
   * Returns a tool with a specific id
   * @param toolId The id of the tool to retrieve
   * @returns A Promise that resolves to the tool entity
   */
  @Get(':tool_id')
  async getToolById(@Param('tool_id') toolId: string): Promise<Tool> {
    return this.getToolByIdService.getToolById(toolId);
  }
}