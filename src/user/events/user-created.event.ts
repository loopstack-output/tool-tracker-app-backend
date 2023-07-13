import {UserDTO} from "../dtos/user.dto";

export class UserCreatedEvent {
    userId: string;
    payload: UserDTO;

    constructor(userId: string, payload: UserDTO) {
        this.userId = userId;
        this.payload = payload;
    }
}