import { Tool } from '../entities/tool.entity';

export interface GetAllCheckedOutToolsForUserServiceInterface {
  getAllCheckedOutToolsForUser(userId: string): Promise<Tool[]>;
}
