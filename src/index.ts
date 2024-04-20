import app from "./app";
import  "./env";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀\x1b[37m`);
});