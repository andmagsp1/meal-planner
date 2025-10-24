# Quick Start Guide

## Run the Todo App

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start both client and server**:
   ```bash
   npm run dev:all
   ```

3. **Open your browser**:
   - Frontend: http://localhost:5173
   - API: http://localhost:3001/api/todos

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server only |
| `npm run dev:server` | Start Express server only |
| `npm run dev:all` | Start both client and server |
| `npm test` | Run Vitest tests |
| `npm test:ui` | Run tests with UI |
| `npm run build` | Build frontend for production |
| `npm run build:server` | Build server for production |

## What's Included

✅ **React Frontend** - Simple todo list with add, toggle, and delete functionality
✅ **Express Backend** - REST API with CRUD operations
✅ **Vitest Setup** - Testing framework configured and working
✅ **TypeScript** - Full type safety across the stack
✅ **Hot Reload** - Both client and server support hot reloading
✅ **Proxy Configuration** - API calls automatically proxied to backend

## Next Steps

- Add more tests for the Todo components
- Add data persistence (database)
- Add user authentication
- Deploy to production

