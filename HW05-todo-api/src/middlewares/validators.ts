import type { Context, Next } from 'hono';
import type { CreateTodoInput, UpdateTodoInput } from '../types/index';

export async function validateIdParam(c: Context, next: Next) {
  const id = parseInt(c.req.param('id'));
  if (isNaN(id) || id < 1) return c.json({ error: 'Invalid ID' }, 400);
  await next();
}

export async function validateCreateTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();
    if (!body.title || typeof body.title !== 'string') return c.json({ error: 'Title is required' }, 400);
    if (body.completed !== undefined && typeof body.completed !== 'boolean') return c.json({ error: 'Invalid completed' }, 400);
    c.set('todoData', body as CreateTodoInput);
    await next();
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400);
  }
}

export async function validateUpdateTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();
    if (!body.title || typeof body.title !== 'string') return c.json({ error: 'Title required' }, 400);
    if (typeof body.completed !== 'boolean') return c.json({ error: 'Completed required' }, 400);
    c.set('todoData', body);
    await next();
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400);
  }
}

export async function validatePatchTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();
    if (body.title !== undefined && typeof body.title !== 'string') return c.json({ error: 'Invalid title' }, 400);
    if (body.completed !== undefined && typeof body.completed !== 'boolean') return c.json({ error: 'Invalid completed' }, 400);
    c.set('todoData', body as UpdateTodoInput);
    await next();
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400);
  }
}