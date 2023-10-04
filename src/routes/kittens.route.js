import {Router} from "express"
import { getKittens } from "../controllers/kittens.controller.js";

export const routerKittens = Router();

routerKittens.get('/', getKittens)