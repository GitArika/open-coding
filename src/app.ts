import express from "express";
import cors, { CorsOptions } from "cors";

const app = express();

const corsOptions: CorsOptions = {
  origin: "http://localhost:4444",
} as CorsOptions;

app.use(cors(corsOptions));
app.use(express.json());

app.get("/healthCheck", (req, res) => {
  res.send({
    message: "🟢 API is healthy 🚀"
  })
});


export default app;