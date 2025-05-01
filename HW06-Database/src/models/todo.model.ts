import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
  return await db.todo.create({
    data: {
      title,
      userId,
    },
  });
};

const getTodo = async (id: number) => {
  return await db.todo.findUnique({
    where: { id },
    include: { user: true },
  });
};

const deleteTodo = async (id: number) => {
  return await db.todo.delete({
    where: { id },
  });
};

const markTodoComplete = async (id: number) => {
  return await db.todo.update({
    where: { id },
    data: { completed: true },
  });
};

const updateTodoTitle = async (id: number, title: string) => {
  return await db.todo.update({
    where: { id },
    data: { title },
  });
};

const getTodosByUserId = async (userId: number) => {
  return await db.todo.findMany({
    where: { userId },
  });
};

export { createTodo, getTodo, deleteTodo, markTodoComplete, updateTodoTitle, getTodosByUserId };
