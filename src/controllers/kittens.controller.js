import { __dirname } from "../../dirname.js";
import { cats } from "../database/data.js";

export const getKittens = (req, res) => {

    res.status(200).json({kittens: cats});
}

export const getKittenById = (req, res) => {
    const { id } = req.params;

    const cat = cats.find(cat => cat.id == id);

    res.status(200).json(cat);

}