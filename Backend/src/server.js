const express = require('express');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/todos', todosRouter);

app.use((req, res) => res.status(404).json({ error: 'not found' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'internal server error' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
