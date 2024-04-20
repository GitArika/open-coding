import { Router } from "express";

import { QuestionController } from "../controller/questionController";

const questionRouter = Router();

questionRouter.get("/", QuestionController.getQuestions);
questionRouter.post("/", QuestionController.createQuestion);
questionRouter.post("/:id/answer", QuestionController.createAnswer);

export { questionRouter };