import { User } from '@db/models/user';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  /**
   * Gets a list of users.
   * @returns A list of users.
   */
  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  /**
   * Creates a user.
   * @param createUserDto The user to insert.
   * @returns The inserted user.
   */
  async create(createUserDto: UserDto): Promise<User> {
    const user = new User();

    user.username = createUserDto.username;
    user.password = await bcrypt.hash(createUserDto.password, 10);
    user.email = createUserDto.email;

    return user.save();
  }

  /**
   * Gets a user by id.
   * @param id The id of the user.
   * @returns The user.
   */
  async findOne(id: number): Promise<User> {
    const user = await User.findByPk(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  /**
   * Updates a user.
   * @param updateUserDto The user to update.
   * @returns The updated user.
   */
  async update(updateUserDto: UserDto): Promise<User> {
    const user = await this.findOne(updateUserDto.id || -1);

    user.username = updateUserDto.username;
    user.password = await bcrypt.hash(updateUserDto.password, 10);
    user.email = updateUserDto.email;

    return user.save();
  }

  /**
   * Deletes a user by id.
   * @param id The id of the user to delete.
   * @returns The status of the operation.
   */
  async delete(id: number): Promise<void> {
    const user = await this.findOne(id);

    return user.destroy();
  }
}
