import { Hono } from 'hono';
import * as controller from '../controllers/todo.controller';
import {
  validateIdParam,
  validateCreateTodo,
  validateUpdateTodo,
  validatePatchTodo,
} from '../middlewares/validators';

const todoRoutes = new Hono();

todoRoutes.get('/', controller.getTodos);
todoRoutes.get('/search', controller.searchTodos);
todoRoutes.get('/:id', validateIdParam, controller.getTodo);
todoRoutes.post('/', validateCreateTodo, controller.createTodo);
todoRoutes.put('/:id', validateIdParam, validateUpdateTodo, controller.updateTodo);
todoRoutes.patch('/:id', validateIdParam, validatePatchTodo, controller.patchTodo);
todoRoutes.delete('/:id', validateIdParam, controller.deleteTodo);

export default todoRoutes;