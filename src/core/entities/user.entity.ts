import { Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Tool } from './tool.entity';

/**
 * Stores user information such as name and checked out tools
 * A user is created when they sign up for the tool checkout system
 */
@Entity('core_user')
export class User {
  /**
   * The unique identifier for the user
   */
  @PrimaryColumn()
  id: string;

  /**
   * The tools that the user has checked out
   * A reference to the tools that the user has checked out. This is a many-to-one relationship. A tool can only be checked out by one user. A user can check out many tools.
   */
  @OneToMany(() => Tool, (tool) => tool.checkedOutBy)
  checkedOutTools: Tool[];
}