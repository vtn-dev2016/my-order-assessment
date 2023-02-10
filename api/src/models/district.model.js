import { Model, DataTypes } from "sequelize";

import Database from "../config/database";
import ProvinceModel from "./province.model";

const sequelize = Database.getInstance().sequelize;

// CREATE TABLE `districts` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `code` int(11) NOT NULL,
//     `name_in_thai` varchar(150) NOT NULL,
//     `name_in_english` varchar(150) NOT NULL,
//     `province_id` int(11) NOT NULL,
//     PRIMARY KEY (`id`),
//     UNIQUE KEY `ux_districts_code` (`code`) USING BTREE,
//     KEY `ix_districts_province_id` (`province_id`) USING BTREE,
//     CONSTRAINT `fk_districts_provinces` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=929 DEFAULT CHARSET=utf8;

class DistrictModel extends Model {
    id;
    code;
    nameInThai;
    nameInEnglish;
}

DistrictModel.init(
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
        provinceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: ProvinceModel,
              key: 'id'
            }
          },
    },
    {
        sequelize,
        modelName: "District",
        underscored: true,
        timestamps: false
    }
);

export default DistrictModel;

