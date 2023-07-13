import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

/**
 * Stores tool information such as name, description, and location
 * A tool is created when an administrator adds a new tool
 */
@Entity()
export class Tool {
  /**
   * The unique identifier for the tool
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * The name of the tool
   */
  @Column()
  name: string;

  /**
   * The description of the tool
   */
  @Column({ nullable: true })
  description?: string;

  /**
   * The location of the tool
   */
  @Column({ nullable: true })
  location?: string;

  /**
   * The user that checked out the tool
   * A reference to the user that checked out the tool. This is a many-to-one relationship. A tool can only be checked out by one user. A user can check out many tools.
   */
  @ManyToOne(() => User, (user) => user.checkedOutTools)
  checkedOutBy?: User;

  /**
   * The date and time when the tool was checked out
   */
  @Column({ nullable: true })
  checkOutDate?: Date;

  /**
   * The date and time when the tool was checked in
   */
  @Column({ nullable: true })
  checkInDate?: Date;
}