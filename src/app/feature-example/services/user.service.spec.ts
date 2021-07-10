import { User } from '@db/models/user';
import { Mock } from 'ts-mockery';
import { UserService } from './user.service';

jest.mock('@db/models/user');

describe('UserService', () => {
  let service: UserService;
  let user: User;

  beforeEach(() => {
    service = new UserService();
    user = Mock.of<User>({ password: '1234' });
  });

  describe('#findAll', () => {
    it('returns an array of users', async () => {
      jest.spyOn(User, 'findAll').mockReturnValue(Promise.resolve([]));

      expect(await service.findAll()).toEqual([]);
    });
  });

  describe('#create', () => {
    it('returns a new user', async () => {
      jest.spyOn(User.prototype, 'save').mockReturnValue(Promise.resolve(user));

      expect(await service.create(user)).toEqual(user);
    });
  });

  describe('#findOne', () => {
    it('returns an user', async () => {
      jest.spyOn(User, 'findByPk').mockReturnValue(Promise.resolve(user));

      expect(await service.findOne(1)).toEqual(user);
    });

    it('fails with an error', async () => {
      jest.spyOn(User, 'findByPk').mockReturnValue(Promise.resolve(null));

      await expect(service.findOne(1)).rejects.toThrow('Not Found');
    });
  });

  describe('#update', () => {
    it('returns the updated user', async () => {
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(new User()));
      jest.spyOn(User.prototype, 'save').mockReturnValue(Promise.resolve(user));

      expect(await service.update(user)).toEqual(user);
    });
  });

  describe('#remove', () => {
    it('removes the user', async () => {
      const deletedUser = new User();

      jest.spyOn(deletedUser, 'destroy');
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(deletedUser));

      await service.delete(1);

      expect(deletedUser.destroy).toHaveBeenCalled();
    });
  });
});
