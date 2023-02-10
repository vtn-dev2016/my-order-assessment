import { asyncMiddleware } from "../middlewares/async.middleware";
import ProvinceModel from "../models/province.model";
import DistrictModel from "../models/district.model";
import SubdistrictModel from "../models/subdistrict.model";
import Sequelize, { Op } from 'sequelize';

class addressController {
  getAddress = asyncMiddleware(
    async (req, res, next) => {
      const searchQuery = req.query.keyword || ""
      const offset = parseInt(req.query.offset) || 0
      const limit = parseInt(req.query.limit) || 100
      const allAddress = await SubdistrictModel.findAll({
        offset,
        limit,
        raw: true,
        where: {
          [Op.or]: [
            {
              nameInThai: { [Op.like]: `%${searchQuery}%` },
            },
            { nameInEnglish: { [Op.like]: `%${searchQuery}%` } },
            {
              nameInThai: Sequelize.where(Sequelize.col('District.name_in_thai'), {
                [Op.like]: `%${searchQuery}%`
              })
            },
            {
              nameInEnglish: Sequelize.where(Sequelize.col('District.name_in_english'), {
                [Op.like]: `%${searchQuery}%`
              })
            },
            {
              nameInThai: Sequelize.where(Sequelize.col('District.Province.name_in_thai'), {
                [Op.like]: `%${searchQuery}%`
              })
            },
            {
              nameInEnglish: Sequelize.where(Sequelize.col('District.Province.name_in_english'), {
                [Op.like]: `%${searchQuery}%`
              })
            }
          ],
        },
        include: [
          {
            model: DistrictModel,
            include: [
              {
                model: ProvinceModel,
              }]
          }],
      })

      return res
        .status(200)
        .json({ success: true, data: allAddress });
    }
  );
}

export default addressController;