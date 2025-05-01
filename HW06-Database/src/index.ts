import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { PrismaClient } from './generated/prisma/index.js';
import { mainRouter } from './routes/index.route.ts';

const app = new Hono();
export const db = new PrismaClient();

db.$connect()
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error("DB Connection Error", err));


app.get("/", (c) => {
  return c.text(" Hono API is running");
});

app.route("", mainRouter);

serve({ fetch: app.fetch, port: 3005 }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
