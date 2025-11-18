# ⭐ User Directory Table — React + Vite + Tailwind CSS

A simple and responsive User Directory web application built using React, Vite, and Tailwind CSS. This project fetches user data from the public API:  
🔗 https://reqres.in/api/users

---

## 🚀 Features

- 📄 Fetch and display users in a responsive table
- 🔍 Search by **name** or **email**
- ↕️ Sort by **first name** or **email**
- 📨 Filter by **email domain**
- 📌 **Pagination** (API supports multiple pages)
- 📊 **Report Generation (PDF)**:
- ⏳ Loading spinner
- 📱 Mobile responsive
- 🎨 Styled with **Tailwind CSS**

---

## 🛠️ Tech Stack
- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- Reqres Users API

---

## 📂 Project Structure

```bash
frontend(user-directory)/
│── public/
│── src/
│   ├── components/
│   │      ├── UserTable.jsx
│   │      ├── SearchBar.jsx
│   │      ├── Pagination.jsx
│   ├── pages/
│   │      └── Home.jsx
│   ├── hooks/
│   │      └── useUsers.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
└── package.json
```
---

## ⚙️ Setup Instructions

- Follow these steps to run the project locally:

### 🔧 Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/im-akash-prajapati-1/user-directory.git
   cd frontend
   
2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Run the development server**
   ```bash
   npm run dev
   ```
   
### **API Reference**
**Users List**  
 ```bash
   GET https://reqres.in/api/users?page=1
   ```
Returns
- id
- email
- first_name
- last_name
- Avatar
