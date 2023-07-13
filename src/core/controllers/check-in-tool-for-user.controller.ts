import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CheckInToolForUserService } from '../services/check-in-tool-for-user.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Tool } from '../entities/tool.entity';

@Controller('api/user/tools')
export class CheckInToolForUserController {
  constructor(private readonly checkInToolForUserService: CheckInToolForUserService) {}

  /**
   * Checks in a tool for the logged-in user
   * @param toolId The id of the tool to check in
   * @param req - The request object containing the authenticated userDTO object
   * @returns A Promise that resolves to the updated tool entity
   */
  @Post('checkin')
  @UseGuards(JwtAuthGuard)
  async checkInToolForUser(
    @Body('tool_id') toolId: string,
    @Request() req,
  ): Promise<Tool> {
    // Validate input
    if (!toolId) {
      throw new Error('Tool ID is required');
    }

    // Call service method
    const updatedTool = await this.checkInToolForUserService.checkInToolForUser(
      toolId,
      req.user.id,
    );

    // Return the updated tool entity
    return updatedTool;
  }
}