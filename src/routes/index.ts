import {Router} from "express";

import { questionRouter } from "./question";

const router = Router();

router.use("/question", questionRouter);

export { router };
