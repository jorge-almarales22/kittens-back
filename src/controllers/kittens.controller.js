import { __dirname } from "../../dirname.js";
import { cats } from "../database/data.js";

export const getKittens = (req, res) => {

    res.status(200).json({kittens: cats});
}

