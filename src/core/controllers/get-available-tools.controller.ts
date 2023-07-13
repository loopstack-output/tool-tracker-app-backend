import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetAvailableToolsService } from '../services/get-available-tools.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Tool } from '../entities/tool.entity';

@Controller('api/tools')
export class GetAvailableToolsController {
  constructor(private readonly getAvailableToolsService: GetAvailableToolsService) {}

  @Get()
  async getAvailableTools(): Promise<Tool[]> {
    return this.getAvailableToolsService.getAvailableTools();
  }
}