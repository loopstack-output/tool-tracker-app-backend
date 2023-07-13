import { Tool } from '../entities/tool.entity';

export interface CheckInToolForUserServiceInterface {
  checkInToolForUser(toolId: string, userId: string): Promise<Tool>;
}