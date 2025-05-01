import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();

todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.delete("/", todoController.deleteTodo);
todoRouter.patch("/complete/:id", todoController.markTodoComplete);
todoRouter.patch("/title/:id", todoController.updateTodoTitle);
todoRouter.get("/user/:userId", todoController.getTodosByUser);

export { todoRouter };