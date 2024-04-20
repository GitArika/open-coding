import {randomUUID} from "node:crypto";
import { IAnswer } from "../schemas/questionSchema";

export class AnswerBuilder {
    public static build(question: any): IAnswer {
        return {
            id: randomUUID(),
            description: question.description,
            author: question?.author || null,
        }
    }
}