import mongoose from "mongoose";
import { PaginateHelper } from "../shared/PaginateHelper";

mongoose.pluralize(null);

export interface IAnswer {
    id: string;
    description: string
    author: string | null;
}

export interface IQuestion {
    _id: mongoose.Types.ObjectId | undefined;
    description: string;
    author: string | null; 

    answer: IAnswer[] | null;
}

const questionSchema = new mongoose.Schema<IQuestion>({
    _id: { type: mongoose.Types.ObjectId, index: true, auto: true, required: true},
    description: { type: String, required: true },
    author: { type: String, required: false },
    answer: { type: Array, required: false }
}, { strict: false, timestamps: true,  });


const Question = mongoose.model<IQuestion>("question", questionSchema);

export class QuestionModel {
    static async getQuestions(page = 1) {
        const paginateHelper = new PaginateHelper(page);

        return await Question.find().skip(paginateHelper.offset).limit(paginateHelper.limit);
    }

    static async getQuestionById(id: string) {
        return await Question.find({ _id: id });
    }

    static async createQuestion(question: IQuestion) {
        return await Question.create(question);
    }

    static async updateQuestion(question: IQuestion) {
        return await Question.updateOne({ _id: question._id }, question);
    }

    static async deleteQuestion(id: string) {
        return await Question.deleteOne({ _id: id });
    }

    static async createAnswer(id: string, answer: IAnswer) {
        return await Question.updateOne({ _id: id }, { $push: { answer } });
    }
}