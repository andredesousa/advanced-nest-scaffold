import { Length } from 'class-validator';

export class Authentication {
  @Length(4, 20)
  username!: string;

  @Length(4, 20)
  password!: string;
}
