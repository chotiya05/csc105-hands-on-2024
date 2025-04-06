import type { CreateTodoInput, Todo, UpdateTodoInput } from '../types/index';

const todos: Todo[] = [
  { id: 1, title: 'Learn Hono', completed: false },
  { id: 2, title: 'Build a REST API', completed: false },
  { id: 3, title: 'Test with Postman', completed: false },
];

export function findAll(): Todo[] {
  return todos;
}

export function findById(id: number): Todo | undefined {
  return todos.find(todo => todo.id === id);
}

export function create(input: CreateTodoInput): Todo {
  const newTodo: Todo = {
    id: todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1,
    title: input.title,
    completed: input.completed ?? false,
  };
  todos.push(newTodo);
  return newTodo;
}

export function update(id: number, input: Todo): Todo | undefined {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return undefined;
  todos[index] = { ...input, id };
  return todos[index];
}

export function patch(id: number, input: UpdateTodoInput): Todo | undefined {
  const todo = findById(id);
  if (!todo) return undefined;
  Object.assign(todo, input);
  return todo;
}

export function remove(id: number): Todo | undefined {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return undefined;
  return todos.splice(index, 1)[0];
}

export function findByCompleted(completed: boolean): Todo[] {
  return todos.filter(todo => todo.completed === completed);
}

export function search(term: string): Todo[] {
  return todos.filter(todo => todo.title.toLowerCase().includes(term.toLowerCase()));
}