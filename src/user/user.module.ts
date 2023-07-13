import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import {UserFactory} from "./services/user-factory.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserFactory],
  exports: [UserFactory],
})
export class UserModule {}
