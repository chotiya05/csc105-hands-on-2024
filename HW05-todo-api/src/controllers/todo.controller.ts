import type { Context } from 'hono';
import * as TodoModel from '../models/todo.model';
import type { CreateTodoInput, UpdateTodoInput, Todo } from '../types/index';

export async function getTodos(c: Context) {
  const completed = c.req.query('completed');
  const todos = completed === 'true'
    ? TodoModel.findByCompleted(true)
    : completed === 'false'
    ? TodoModel.findByCompleted(false)
    : TodoModel.findAll();
  return c.json(todos);
}

export async function getTodo(c: Context) {
  const id = parseInt(c.req.param('id'));
  const todo = TodoModel.findById(id);
  return todo ? c.json(todo) : c.json({ error: 'Todo not found' }, 404);
}

export async function createTodo(c: Context) {
  const input = c.get('todoData') as CreateTodoInput;
  const newTodo = TodoModel.create(input);
  return c.json(newTodo, 201);
}

export async function updateTodo(c: Context) {
  const id = parseInt(c.req.param('id'));
  const input = c.get('todoData') as Todo;
  const updated = TodoModel.update(id, input);
  return updated ? c.json(updated) : c.json({ error: 'Todo not found' }, 404);
}

export async function patchTodo(c: Context) {
  const id = parseInt(c.req.param('id'));
  const input = c.get('todoData') as UpdateTodoInput;
  const updated = TodoModel.patch(id, input);
  return updated ? c.json(updated) : c.json({ error: 'Todo not found' }, 404);
}

export async function deleteTodo(c: Context) {
  const id = parseInt(c.req.param('id'));
  const deleted = TodoModel.remove(id);
  return deleted
    ? c.json({ message: 'Todo deleted successfully', deleted })
    : c.json({ error: 'Todo not found' }, 404);
}

export async function searchTodos(c: Context) {
  const term = c.req.query('q');
  if (!term) return c.json({ error: 'Search term is required' }, 400);
  const results = TodoModel.search(term);
  return c.json({ results, count: results.length, term });
}