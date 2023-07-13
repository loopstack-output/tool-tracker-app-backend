import { Tool } from '../entities/tool.entity';

export interface GetAvailableToolsServiceInterface {
  getAvailableTools(): Promise<Tool[]>;
}