import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Tool } from './entities/tool.entity';
import { User } from './entities/user.entity';
import { GetAvailableToolsService } from './services/get-available-tools.service';
import { GetToolByIdService } from './services/get-tool-by-id.service';
import { CheckOutToolForUserService } from './services/check-out-tool-for-user.service';
import { GetAllCheckedOutToolsForUserService } from './services/get-all-checked-out-tools-for-user.service';
import { CheckInToolForUserService } from './services/check-in-tool-for-user.service';
import { GetAvailableToolsController } from './controllers/get-available-tools.controller';
import { GetToolByIdController } from './controllers/get-tool-by-id.controller';
import { CheckOutToolForUserController } from './controllers/check-out-tool-for-user.controller';
import { GetAllCheckedOutToolsForUserController } from './controllers/get-all-checked-out-tools-for-user.controller';
import { CheckInToolForUserController } from './controllers/check-in-tool-for-user.controller';
import { UserCreatedEventHandlerService } from './services/user-created-event-subscriber.service';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([User, Tool]),
  ],
  providers: [
    GetAvailableToolsService,
    GetToolByIdService,
    CheckOutToolForUserService,
    GetAllCheckedOutToolsForUserService,
    CheckInToolForUserService,
    UserCreatedEventHandlerService,
  ],
  controllers: [
    GetAvailableToolsController,
    GetToolByIdController,
    CheckOutToolForUserController,
    GetAllCheckedOutToolsForUserController,
    CheckInToolForUserController,
  ],
})
export class CoreModule {}