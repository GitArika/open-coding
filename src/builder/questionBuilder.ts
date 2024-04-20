import { IQuestion } from "../schemas/questionSchema";

export class QuestionBuilder {
    public static build(question: any): IQuestion {
        return {
            _id: undefined,
            description: question.description,
            author: question?.author || null,
            answer: [],
        }
    }
}