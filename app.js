const express = require('express');
const app = express();
const path = require('path');

// In-memory task storage
let tasks = [
  { id: 1, title: "Prepare Report", description: "Complete weekly project report", priority: "High", status: "Pending" },
  { id: 2, title: "Team Meeting", description: "Discuss Q4 goals with the team", priority: "Medium", status: "In Progress" },
  { id: 3, title: "Code Review", description: "Review pull requests from developers", priority: "Low", status: "Completed" }
];
let nextId = 4;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ─── ROUTES ───────────────────────────────────────────────────────────────────

// Dashboard
app.get('/', (req, res) => {
  const total = tasks.length;
  const pending = tasks.filter(t => t.status === 'Pending').length;
  const inProgress = tasks.filter(t => t.status === 'In Progress').length;
  const completed = tasks.filter(t => t.status === 'Completed').length;
  res.render('dashboard', { tasks, total, pending, inProgress, completed, message: req.query.message || null });
});

// Add Task – form
app.get('/add', (req, res) => {
  res.render('add-task', { error: null });
});

// Add Task – submit
app.post('/add', (req, res) => {
  const { title, description, priority } = req.body;
  if (!title || !title.trim()) {
    return res.render('add-task', { error: 'Task title is required.' });
  }
  tasks.push({ id: nextId++, title: title.trim(), description: description.trim(), priority, status: 'Pending' });
  res.redirect('/?message=Task added successfully!');
});

// Edit Task – form
app.get('/edit/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.redirect('/');
  res.render('edit-task', { task, error: null });
});

// Edit Task – submit
app.post('/edit/:id', (req, res) => {
  const { title, description, priority, status } = req.body;
  const idx = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (idx === -1) return res.redirect('/');
  if (!title || !title.trim()) {
    return res.render('edit-task', { task: tasks[idx], error: 'Task title is required.' });
  }
  tasks[idx] = { ...tasks[idx], title: title.trim(), description: description.trim(), priority, status };
  res.redirect('/?message=Task updated successfully!');
});

// Delete Task
app.post('/delete/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.redirect('/?message=Task deleted.');
});

// Change Status
app.post('/status/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    const flow = { 'Pending': 'In Progress', 'In Progress': 'Completed', 'Completed': 'Pending' };
    task.status = flow[task.status] || 'Pending';
  }
  res.redirect('/');
});

// Start
const PORT = 8000;
app.listen(PORT, () => console.log(`✅ TodoApp running at http://localhost:${PORT}`));
