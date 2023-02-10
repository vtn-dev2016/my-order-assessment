import { Model, DataTypes, BelongsToSetAssociationMixin } from "sequelize";
import * as bcrypt from "bcrypt";

import Database from "../config/database";

const sequelize = Database.getInstance().sequelize;
class UserModel extends Model {
  password;
  email;
  firstName;
  lastName;
  mimetype;
  nickname;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        isEmail: {
          msg: "กรุณาตรวจสอบรูปแบบอีเมลให้ถูกต้อง",
        },
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [8, 100],
          msg: "รหัสผ่านต้องมีอย่างน้อย 8 ตัว",
        },
      },
      set(val) {
        const hash = bcrypt.hashSync(val, 10);
        this.setDataValue("password", hash);
      },
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "User",
    underscored: true,
    timestamps: true
  }
);

export default UserModel;
