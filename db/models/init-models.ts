import type { Sequelize, Model } from "sequelize";
import { SequelizeMeta } from "./sequelize_meta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./sequelize_meta";
import { User } from "./user";
import type { UserAttributes, UserCreationAttributes } from "./user";

export {
  SequelizeMeta,
  User,
};

export type {
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  SequelizeMeta.initModel(sequelize);
  User.initModel(sequelize);


  return {
    SequelizeMeta: SequelizeMeta,
    User: User,
  };
}
