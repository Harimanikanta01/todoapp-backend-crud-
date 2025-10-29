To-Do Application (Express.js + MongoDB)
A simple REST API-based To-Do App built with Node.js, Express.js, and MongoDB using Mongoose ORM.
This application allows users to create, read, update, and delete tasks.
🚀 Features
Add a new To-Do task
Get all tasks
Update a task
Delete a task
MongoDB database connection using Mongoose
Environment variables using dotenv
MVC folder structure (Model, Routes, Controller)




.
├── controllers/
│   └── todoController.js
├── models/
│   └── todoModel.js
├── routes/
│   └── todoRoutes.js
├── config/
│   └── db.js
├── .env
├── server.js
├── package.json
└── README.md
⚙️ Tech Stack
Technology	Purpose
Node.js	Runtime
Express.js	Server framework
MongoDB	Database
Mongoose	MongoDB ORM
dotenv	Manage environment variables
📦 Installation & Setup
1️⃣ Clone the repository
git clone <repo-link>
cd todo-app
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
MONGO_URL=your_mongo_db_connection_url
PORT=5000
4️⃣ Start Server
npm start
🧪 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Get all tasks
POST	/api/todos	Create new task
PUT	/api/todos/:id	Update task
DELETE	/api/todos/:id	Delete task
