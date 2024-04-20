import { Request, Response } from "express";


export async function errorHandler(error: any, req: Request, res: Response) {
  console.error(error);
  res.status(error?.status || 500)

  return res.send({
    message: error.message || "Internal server error"
  });
}