import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';
import todoRoutes from './routes/todo.routes';

const app = new Hono();

app.use('*', logger());

app.get('/', (c) => c.json({ message: 'Welcome to our Todo API!', status: 'Server is running' }));

app.route('/todos', todoRoutes);

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Server running at http://localhost:${info.port}`);
});