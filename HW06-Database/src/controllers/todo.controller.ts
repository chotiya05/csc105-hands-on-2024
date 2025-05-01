import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type CreateTodoBody = {
  title: string;
  userId: number;
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<CreateTodoBody>();
    if (!body.title || !body.userId) {
      return c.json({ success: false, msg: "Missing required fields" }, 400);
    }
    const todo = await todoModel.createTodo(body.title, body.userId);
    return c.json({ success: true, data: todo });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

const getTodo = async (c: Context) => {
  try {
    const idParam = c.req.query("id");
    if (!idParam) {
      return c.json({ success: false, msg: "Missing id parameter" }, 400);
    }
    const id = parseInt(idParam);
    const todo = await todoModel.getTodo(id);
    return c.json({ success: true, data: todo });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

const deleteTodo = async (c: Context) => {
  try {
    const idParam = c.req.query("id");
    if (!idParam) {
      return c.json({ success: false, msg: "Missing id parameter" }, 400);
    }
    const id = parseInt(idParam);
    const todo = await todoModel.deleteTodo(id);
    return c.json({ success: true, data: todo });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

const markTodoComplete = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    const updated = await todoModel.markTodoComplete(id);
    return c.json({ success: true, data: updated });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

const updateTodoTitle = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    const body = await c.req.json<{ title: string }>();
    if (!body.title) {
      return c.json({ success: false, msg: "Missing title field" }, 400);
    }
    const updated = await todoModel.updateTodoTitle(id, body.title);
    return c.json({ success: true, data: updated });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

const getTodosByUser = async (c: Context) => {
  try {
    const userId = parseInt(c.req.param("userId"));
    const todos = await todoModel.getTodosByUserId(userId);
    return c.json({ success: true, data: todos });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

export {
  createTodo,
  getTodo,
  deleteTodo,
  markTodoComplete,
  updateTodoTitle,
  getTodosByUser,
};
