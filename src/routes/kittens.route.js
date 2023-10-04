import {Router} from "express"
import { getKittenById, getKittens } from "../controllers/kittens.controller.js";

export const routerKittens = Router();

routerKittens.get('/', getKittens)
routerKittens.get('/:id', getKittenById)