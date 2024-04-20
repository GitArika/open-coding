import express from "express";
import cors, { CorsOptions } from "cors";

import { router } from "./routes";
import { mongodbConnect } from "./database";

mongodbConnect()

const app = express();

const corsOptions: CorsOptions = {
  origin: "http://localhost:4444",
} as CorsOptions;

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/healthCheck", (req, res) => {
  res.send({
    message: "🟢 API is healthy 🚀"
  })
});


export default app;