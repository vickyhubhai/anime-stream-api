import app from './src/app';
import Bun from 'bun';

const port = process.env.PORT ? Number(process.env.PORT) : 0; // 0 lets OS pick a free port
const server = Bun.serve({
  port,
  fetch: app.fetch,
});
console.log(`Server running on port ${server.port}`);
