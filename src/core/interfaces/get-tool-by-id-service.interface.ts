import { Tool } from '../entities/tool.entity';

export interface GetToolByIdServiceInterface {
  getToolById(toolId: string): Promise<Tool>;
}