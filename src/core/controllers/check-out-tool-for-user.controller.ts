import { Controller, Post, Body, HttpCode, UseGuards, Request } from '@nestjs/common';
import { CheckOutToolForUserService } from '../services/check-out-tool-for-user.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Tool } from '../entities/tool.entity';

@Controller('api/user/tools')
export class CheckOutToolForUserController {
  constructor(private readonly checkOutToolForUserService: CheckOutToolForUserService) {}

  @Post('checkout')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async checkOutToolForUser(
    @Body('tool_id') toolId: string,
    @Request() req,
  ): Promise<Tool> {
    if (!toolId) {
      throw new Error('Tool ID is required');
    }
    const updatedTool = await this.checkOutToolForUserService.checkOutToolForUser(toolId, req.user.id);
    return updatedTool;
  }
}