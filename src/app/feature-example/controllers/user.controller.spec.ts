import { User } from '@db/models/user';
import { Mock } from 'ts-mockery';
import { UserDto } from '../dtos/user.dto';
import { UserService } from '../services/user.service';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;
  let user: User;

  beforeEach(() => {
    user = Mock.of<User>();
    service = Mock.of<UserService>({
      create: () => Promise.resolve(user),
      findAll: () => Promise.resolve([]),
      findOne: () => Promise.resolve(user),
      delete: () => Promise.resolve(),
      update: () => Promise.resolve(user),
    });

    controller = new UserController(service);
  });

  describe('#findAll', () => {
    it('returns an array of users', async () => {
      const result: UserDto[] = await controller.findAll();

      expect(result).toEqual([]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('#findOne', () => {
    it('returns an user', async () => {
      const result: UserDto = await controller.findOne(1);

      expect(result).toEqual(user);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('#create', () => {
    it('returns a new user', async () => {
      const userDto: UserDto = { password: '', username: '', email: '' };
      const result: UserDto = await controller.create(userDto);

      expect(result).toEqual(user);
      expect(service.create).toHaveBeenCalledWith(userDto);
    });
  });

  describe('#update', () => {
    it('returns the updated user', async () => {
      const userDto: UserDto = { password: '', username: '', email: '' };
      const result: UserDto = await controller.update(userDto);

      expect(result).toEqual(user);
      expect(service.update).toHaveBeenCalledWith(userDto);
    });
  });

  describe('#remove', () => {
    it('removes the user', async () => {
      await controller.delete(1);

      expect(service.delete).toHaveBeenCalledWith(1);
    });
  });
});
