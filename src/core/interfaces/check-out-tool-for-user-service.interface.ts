import { Tool } from '../entities/tool.entity';

export interface CheckOutToolForUserServiceInterface {
  checkOutToolForUser(toolId: string, userId: string): Promise<Tool>;
}