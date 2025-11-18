const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, '..', '..', 'data', 'todos.json');

async function readDB() {
  try {
    const txt = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(txt || '[]');
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeDB(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { readDB, writeDB };
