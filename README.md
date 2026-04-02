# 🚀 Custom Server Builder

A beginner-friendly Node.js project that demonstrates how to create an HTTP server using the built-in **http module** without Express.js.
This server handles multiple routes, returns different response types, manages query parameters, and sends proper HTTP status codes.

---

## 📌 Project Objective

Create a Node.js HTTP server that:

* Runs on a custom port
* Handles multiple routes
* Returns HTML, JSON, and plain text responses
* Supports query parameters
* Uses correct HTTP status codes

---

## 🛠 Tech Stack

* Node.js
* Built-in `http` module
* Built-in `url` module

---

## 📂 Project Structure

```
custom-server-builder
│
├── server.js
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/custom-server-builder.git
```

### 2️⃣ Navigate to project folder

```
cd custom-server-builder
```

### 3️⃣ Run the server

```
node server.js
```

Server will start at:

```
http://localhost:8005
```

---

## 🌐 Available Routes

### 🏠 Home Route

```
GET /
```

Returns HTML response.

---

### 📄 About Route

```
GET /about
```

Returns plain text response.

---

### 📬 Contact Route

```
GET /contact
```

Returns JSON response.

---

### 👤 User Route (Query Parameter)

```
GET /user?name=Rahul
```

Returns dynamic response based on query parameter.

Example output:

```
Hello Rahul
```

---

### ❌ 404 Route

Any undefined route will return:

```
404 Page Not Found
```

---

## 📊 Response Types Used

* HTML (`text/html`)
* Plain Text (`text/plain`)
* JSON (`application/json`)

---

## 🔢 Status Codes

| Code | Meaning   |
| ---- | --------- |
| 200  | Success   |
| 404  | Not Found |

---

## ▶️ Example URLs

```
http://localhost:8005/
http://localhost:8005/about
http://localhost:8005/contact
http://localhost:8005/user?name=Rahul
```

---

## 🎯 Features

* Custom HTTP server
* No Express.js
* Multiple route handling
* Query parameter support
* Different response types
* Proper status codes
* Beginner friendly

---

## 🚀 Future Improvements

* Add POST request handling
* Add REST API structure
* Serve static files
* Add middleware logic
* Add routing module separation

---

## 👨‍💻 Author

Your Name

---

## 📜 License

This project is open source and available under the MIT License.

<img width="907" height="272" alt="Screenshot 2026-04-02 152808" src="https://github.com/user-attachments/assets/c1a9d332-3e47-4979-8a5a-0ea1d786a2aa" />
<img width="629" height="243" alt="Screenshot 2026-04-02 152815" src="https://github.com/user-attachments/assets/00cedb25-f52c-4ca3-a8f0-30be47ff34f5" />
<img width="592" height="264" alt="Screenshot 2026-04-02 152822" src="https://github.com/user-attachments/assets/d3d94384-adcc-41b5-8997-80e34e2895d3" />
<img width="568" height="238" alt="Screenshot 2026-04-02 152831" src="https://github.com/user-attachments/assets/07f3526e-b4e0-4bd5-a2d5-9225191db753" />
<img width="522" height="265" alt="Screenshot 2026-04-02 152841" src="https://github.com/user-attachments/assets/19607151-6d02-4de9-8dd2-61082ff1f1eb" />
<img width="484" height="227" alt="Screenshot 2026-04-02 152855" src="https://github.com/user-attachments/assets/5f69605e-4bc5-4422-844a-4ca9ba66d2d6" />







