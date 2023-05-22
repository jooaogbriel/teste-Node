import express from "express";
import userRouter from './routes/boardsRouter'
import createBoardsController from "./controllers/boards.controllers";

const app = express();
app.use(express.json());

app.post("/boards", createBoardsController)

app.listen(3000, () => {
    console.log('Server is running')
})

export default app;