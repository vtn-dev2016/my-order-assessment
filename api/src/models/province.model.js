import { Model, DataTypes } from "sequelize";

import Database from "../config/database";

const sequelize = Database.getInstance().sequelize;

class ProvinceModel extends Model {
    id;
    code;
    nameInThai;
    nameInEnglish;
}

ProvinceModel.init(
    {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        code: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: true,
        },
        nameInThai: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        nameInEnglish: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Province",
        underscored: true,
        timestamps: false
    }
);

export default ProvinceModel;