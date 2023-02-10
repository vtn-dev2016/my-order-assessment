import { Model, DataTypes } from "sequelize";

import Database from "../config/database";
import DistrictModel from "./district.model";

const sequelize = Database.getInstance().sequelize;

class SubdistrictModel extends Model {
    id;
    code;
    nameInThai;
    nameInEnglish;
    latitude;
    longitude;
    DistrictId;
}

SubdistrictModel.init(
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
        latitude: {
            type: DataTypes.FLOAT(6, 3),
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT(6, 3),
            allowNull: false
        },
        districtId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: DistrictModel,
                key: 'id'
            }
        },
    },
    {
        sequelize,
        modelName: "Subdistrict",
        underscored: true,
        timestamps: false
    }
);

export default SubdistrictModel;
