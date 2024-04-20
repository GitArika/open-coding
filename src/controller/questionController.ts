import {Request, Response} from "express";

import { IQuestion, QuestionModel } from "../schemas/questionSchema";
import { QuestionBuilder } from "../builder/questionBuilder";
import { AnswerBuilder } from "../builder/answerBuilder";
import { errorHandler } from "./errorHandler";

export class QuestionController {
    public static async getQuestions(req: Request, res: Response): Promise<IQuestion[] | any> {
        try {

            const { page } = req.query;
            const questions = await QuestionModel.getQuestions(Number(page));

            return res.send(questions);
        } catch (error: any) {
            return errorHandler(error, req, res)
        }
    }

    public static async createQuestion(req: Request, res: Response): Promise<IQuestion | any> {
        try {
            const { description, author } = req.body;
            const question = QuestionBuilder.build({ description, author });

            const result = await QuestionModel.createQuestion(question);

            return res.send(result);
        } catch (error: any) {
            return errorHandler(error, req, res)
        }
    }

    public static async createAnswer(req: Request, res: Response): Promise<IQuestion | any> {
        try {
            const { id } = req.params;
            const { description, author } = req.body;
            const answer = AnswerBuilder.build({ description, author });

            const result = await QuestionModel.createAnswer(id, answer);

            return res.send(result);
        } catch (error: any) {
            return errorHandler(error, req, res)
        }
    }
}

