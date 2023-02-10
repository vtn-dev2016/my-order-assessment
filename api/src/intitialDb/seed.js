import * as express from "express";

import Database from "../config/database";

const sequelize = Database.getInstance().sequelize;

async function firstSeed(res) {
    try {
        await Database.getInstance().sequelize.sync({ force: true });
        return res.status(200).json({ success: true, message: "seed ok" });

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: error });
    }

}


export default firstSeed