# ⭐ Simple To-Do CRUD API

A lightweight and beginner-friendly REST API for managing To-Do items.
This project uses Node.js, Express, and a simple local JSON file as storage — no database required.

---

## 🚀 Features

- 📄 **Create, Read, Update, Delete** todo items
- 📌 Store data inside a **local JSON file** (no database needed)
- ✔️ Input validation for required fields
- 🔄 Field **completed: true/false** support
- 📁 Clean folder structure
- 🧪 Test using **curl** or **Postman**
- 📡 Proper HTTP status codes (200, 201, 400, 404, 500)

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- JavaScript (ES6+)
- File-based JSON storage

---

## 📂 Project Structure

```bash
Backend(todo-api)/
├─ data/
│  └─ todos.json
├─ src/
│  ├─ server.js
│  ├─ routes/
│  │  └─ todos.js
│  └─ utils/
│     └─ fileDb.js
├─ .gitignore
└─ package.json
```
---

## ⚙️ Setup Instructions

- Follow these steps to run the API locally:

### 🔧 Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/im-akash-prajapati-1/todo-api.git
   cd backend
   
2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **Server will run at:**
   ```bash
   http://localhost:3000
   ```
   
### **🧪 Testing the API**
**Create Todo**  
 ```bash
   curl -i -X POST -H "Content-Type: application/json" -d "{\"title\":\"Buy milk\",\"completed\":false}" http://localhost:3000/todos
   ```
**Update Todo**  
 ```bash
   curl -i -X PUT -H "Content-Type: application/json" -d "{\"title\":\"Buy oat milk\",\"completed\":true}" http://localhost:3000/todos/<id>
   ```
**Delete Todo**  
 ```bash
   curl -i -X DELETE http://localhost:3000/todos/<id>
   ```

### **Todo Object Structure**
Each todo item looks like this:
```bash
   {
  "id": "(Any integer number like 1763456763384)",
  "title": "Buy milk",
  "description": "",
  "completed": false
  }
   ```

### **Notes**
- This project uses a **file-based JSON database**, recommended only for learning/testing.
- For production, switch to MongoDB, PostgreSQL, or SQLite.
- If todos.json becomes corrupted, replace its content with:
  ```bash
   []
   ```
