import {UserDTO} from "../dtos/user.dto";

export interface UserFactoryInterface {
  /**
   * Get a user by id
   * Example: findUserById('84664942-13f9-11ee-be56-0242ac120002')
   * @param id
   */
  getUserById(id: string): Promise<UserDTO | undefined>;
}
