import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { Tool } from '../entities/tool.entity';
import { GetAllCheckedOutToolsForUserService } from '../services/get-all-checked-out-tools-for-user.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('api/user/tools')
export class GetAllCheckedOutToolsForUserController {
  constructor(private readonly getAllCheckedOutToolsForUserService: GetAllCheckedOutToolsForUserService) {}

  /**
   * Returns a list of all tools checked out by the logged-in user
   * @param req - The request object containing the authenticated userDTO object
   * @returns A Promise that resolves to a list of tool entities
   */
  @Get('checkedout')
  @UseGuards(JwtAuthGuard)
  async getAllCheckedOutToolsForUser(@Request() req): Promise<Tool[]> {
    // Call service method
    const tools = await this.getAllCheckedOutToolsForUserService.getAllCheckedOutToolsForUser(req.user.id);

    // Return list of checked out tool entities to the frontend
    return tools;
  }
}