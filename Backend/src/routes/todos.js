const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../utils/fileDb');

// Basic validation middleware
function validateTodo(req, res, next) {
  const { title, completed } = req.body;
  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'title is required and must be a non-empty string' });
  }
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'completed must be boolean if provided' });
  }
  next();
}

// GET /todos
router.get('/', async (req, res) => {
  try {
    const todos = await readDB();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'failed to read todos' });
  }
});

// POST /todos
router.post('/', validateTodo, async (req, res) => {
  try {
    const { title, completed = false, description = '' } = req.body;
    const todos = await readDB();
    const newTodo = { id: Date.now().toString(), title: title.trim(), description, completed };
    todos.push(newTodo);
    await writeDB(todos);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: 'failed to create todo' });
  }
});

// PUT /todos/:id
router.put('/:id', validateTodo, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed = false, description = '' } = req.body;
    const todos = await readDB();
    const idx = todos.findIndex(t => t.id === id);
    if (idx === -1) return res.status(404).json({ error: 'todo not found' });
    todos[idx] = { ...todos[idx], title: title.trim(), description, completed };
    await writeDB(todos);
    res.json(todos[idx]);
  } catch (err) {
    res.status(500).json({ error: 'failed to update todo' });
  }
});

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await readDB();
    const idx = todos.findIndex(t => t.id === id);
    if (idx === -1) return res.status(404).json({ error: 'todo not found' });
    const [deleted] = todos.splice(idx, 1);
    await writeDB(todos);
    res.json({ message: 'deleted', todo: deleted });
  } catch (err) {
    res.status(500).json({ error: 'failed to delete todo' });
  }
});

module.exports = router;
