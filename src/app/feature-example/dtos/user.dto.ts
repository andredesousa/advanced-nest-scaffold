import { IsEmail, Length } from 'class-validator';

export class UserDto {
  id?: number;

  @Length(4, 20)
  username!: string;

  @Length(8, 20)
  password!: string;

  @Length(4, 50)
  @IsEmail()
  email!: string;
}
