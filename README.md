# 📝 Todo Management System

A simple real-time Todo Management System built with **Node.js**, **Express.js**, and **EJS** templating engine. Tasks are stored in a local array (in-memory) — no database required.

---

## 🚀 Live Demo

Run locally at → `http://localhost:8000`

---

## 📸 Screenshots

| Dashboard | Add Task | Edit Task |
|-----------|----------|-----------|
| View all tasks with stats | Create a new task | Edit task details |

---

## ✨ Features

- ✅ View all tasks on a clean dashboard
- ✅ Summary cards — Total, Pending, In Progress, Completed
- ✅ Add new tasks with Title, Description, and Priority
- ✅ Edit existing task details and status
- ✅ Delete tasks with confirmation prompt
- ✅ Cycle task status → Pending → In Progress → Completed
- ✅ Color-coded Priority and Status badges
- ✅ Responsive layout using Bootstrap 5
- ✅ Flash messages for user feedback

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express.js | Web framework |
| EJS | HTML templating engine |
| Bootstrap 5 | UI styling |
| In-memory Array | Data storage |

---

## 📁 Project Structure

```
TodoApp/
│
├── views/
│   ├── partials/
│   │   ├── header.ejs       # Navbar + HTML head
│   │   └── footer.ejs       # Footer + scripts
│   │
│   ├── dashboard.ejs        # Home page with stats + task table
│   ├── add-task.ejs         # Add new task form
│   └── edit-task.ejs        # Edit existing task form
│
├── public/
│   └── css/
│       └── style.css        # Custom styles
│
├── app.js                   # Main server file (routes + logic)
├── package.json             # Project dependencies
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/todo-management-system.git
cd todo-management-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
node app.js
```

### 4. Open in browser
```
http://localhost:8000
```

---

## 📌 Task Object Structure

```javascript
{
  id: 1,
  title: "Prepare Report",
  description: "Complete weekly project report",
  priority: "High",       // High | Medium | Low
  status: "Pending"       // Pending | In Progress | Completed
}
```

---

## 🔁 Status Flow

```
Pending  →  In Progress  →  Completed  →  Pending (repeats)
```
Click the 🔄 button on any task to cycle through statuses.

---

## 📦 Dependencies

```json
{
  "express": "^4.x",
  "ejs": "^3.x"
}
```

Install with:
```bash
npm install
```

---

<img width="1275" height="694" alt="Screenshot 2026-04-06 075113" src="https://github.com/user-attachments/assets/89127327-a04a-4e33-abca-abf10ed9dd9f" />
<img width="1223" height="669" alt="Screenshot 2026-04-06 075127" src="https://github.com/user-attachments/assets/c8d20c1d-7d63-42c7-bee1-5cb361056cb1" />
<img width="1239" height="593" alt="Screenshot 2026-04-06 075317" src="https://github.com/user-attachments/assets/0b9417de-1a50-450d-a028-ed1ecce69047" />
<img width="1236" height="673" alt="Screenshot 2026-04-06 075334" src="https://github.com/user-attachments/assets/94bfa785-33ba-415e-a435-c6b36e37e597" />
<img width="1182" height="682" alt="Screenshot 2026-04-06 075403" src="https://github.com/user-attachments/assets/48e91b65-b34d-4f6e-8fe5-51c02cb698ca" />
<img width="1227" height="713" alt="Screenshot 2026-04-06 075416" src="https://github.com/user-attachments/assets/91e53659-cfaf-4cc6-afde-3c1c33c3c560" />
<img width="1238" height="642" alt="Screenshot 2026-04-06 075431" src="https://github.com/user-attachments/assets/f15c9e58-724d-4dd1-9dd2-9e867dd1af4a" />
<img width="1230" height="620" alt="Screenshot 2026-04-06 075446" src="https://github.com/user-attachments/assets/6dec700f-1789-4962-ad57-1a922012f165" />
