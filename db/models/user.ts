import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserAttributes {
  id?: number;
  username: string;
  password: string;
  email: string;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserCreationAttributes = Optional<UserAttributes, UserPk>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id?: number;
  username!: string;
  password!: string;
  email!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    User.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return User;
  }
}
