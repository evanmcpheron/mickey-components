import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`🚀 ~ Server is running on port ${port}`);
});
