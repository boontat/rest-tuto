import express from 'express';
import TodoController from '../controller/todos';

const router = express.Router();

// get all todos
router.get('/api/v1/todos', TodoController.getAllTodos);

// create todo
router.post('/api/v1/todos', TodoController.createTodo);

// get single todo
router.get('/api/v1/todos/:id', TodoController.getTodo);

// update todo
router.put('/api/v1/todos/:id', TodoController.updateTodo);

// delete todo
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

export default router;