import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserDTO } from '../dtos/user.dto';
import { UserService } from './user.service';
import { UserFactoryInterface } from '../interfaces/user-factory.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '../events/user-created.event';

@Injectable()
export class UserFactory implements UserFactoryInterface {
  constructor(
    private readonly userService: UserService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  createFromEntity(entity: User): UserDTO {
    const { password, ...user } = entity;
    return user as UserDTO;
  }

  async getUserById(id: string): Promise<UserDTO | undefined> {
    return this.createFromEntity(await this.userService.findUserById(id));
  }

  async getLoginUser(
    username: string,
  ): Promise<{ user: UserDTO; password: string } | null> {
    const user = await this.userService.findUserByUsername(username);
    if (!user) {
      return null;
    }

    return {
      password: user.password,
      user: this.createFromEntity(user),
    };
  }

  async create(username: string, hashedPassword: string): Promise<UserDTO> {
    const user = await this.userService.create(username, hashedPassword);
    const dto = this.createFromEntity(user);

    console.log('UserFactory.create', user.id, user);
    this.eventEmitter.emit('user.created', new UserCreatedEvent(user.id, user));
    return dto;
  }
}
