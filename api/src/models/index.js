
import UserModel from "./user.model";
import ProvinceModel from "./province.model";
import DistrictModel from "./district.model";
import SubdistrictModel from "./subdistrict.model";

//ProvinceModel - DistrictModel
ProvinceModel.hasMany(DistrictModel, {
  foreignKey: "provinceId",
  sourceKey: "id",
});

DistrictModel.belongsTo(ProvinceModel, {
  foreignKey: "provinceId",
  targetKey: "id",
});

//DistrictModel - SubdistrictModel
DistrictModel.hasMany(SubdistrictModel, {
  foreignKey: "districtId",
  sourceKey: "id",
});
SubdistrictModel.belongsTo(DistrictModel, {
  foreignKey: "districtId",
  targetKey: "id",
});
