<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->


# Pro-Tasker

A full-stack project management tool that lets users create, update, and delete projects and tasks with secure user authentication.

---

## 🚀 **Overview**

Pro-Tasker is a full-stack task management application built using **React, TypeScript, Tailwind, Node.js, Express, and MongoDB**.
The app allows authenticated and verified users to organize their projects and tasks with an easy-to-use interface.

---

## 🛠️ **Tech Stack**

### **Frontend**

* React
* TypeScript
* Tailwind CSS
* Axios
* React Router

### **Backend**

* Node.js
* Express
* MongoDB / Mongoose
* JSON Web Tokens (JWT)
* Bcrypt

---

## 🔐 **Authentication**

* Users must register and verify their email
* Only verified users can:
  ✔ Create projects
  ✔ Update projects
  ✔ Delete projects
  ✔ Create & manage tasks
* Unauthorized users are completely blocked from modifying data

---

## 📌 **Features**

### **Projects**

* Create a new project
* Update project name and description
* Delete project
* View all projects for the logged-in user

### **Tasks**

* Create tasks under a project
* Update task status, name, and details
* Delete tasks
* Link tasks directly to a specific project

### **User**

* Register with authentication + verification
* Login to access your own dashboard and data
* Only the owner can modify their own projects or tasks

---

## 🎯 **Purpose of the Project**

While building Pro-Tasker, I worked through real-world development challenges—connecting backend with frontend, configuring Axios, handling TypeScript issues, and dealing with deployment errors.
This project helped me understand how full-stack apps communicate and how to fix bugs through debugging tools and proper type setup.

---

## 🔧 **Installation**

### **Frontend**

```bash
git clone https://github.com/sagaradhikari072819/Frontend-Final-Pro-Tasker.git
cd Frontend-Final-Pro-Tasker
npm install
npm run dev
```

### **Backend**

```bash
git clone https://github.com/sagaradhikari072819/Backend-Final-Pro-Tasker.git
cd Backend-Final-Pro-Tasker
npm install
npm run dev
```

---

## 🔌 **Environment Variables**

### Backend `.env` example:

```
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_secret_here
CLIENT_URL=http://localhost:5173
```

### Frontend `.env` example:

```
VITE_API_URL=http://localhost:3000
```

---

## 🌐 **API Endpoints (Backend)**

### **Auth**

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/auth/verify/:token`

### **Projects**

* GET `/api/projects`
* GET `/api/projects/:projectId`
* POST `/api/projects`
* PUT `/api/projects/:projectId`
* DELETE `/api/projects/:projectId`

### **Tasks**

* GET `/api/projects/:projectId/tasks`
* GET `/api/projects/:projectId/tasks/:taskId`
* POST `/api/projects/:projectId/tasks`
* PUT `/api/projects/:projectId/tasks/:taskId`
* DELETE `/api/projects/:projectId/tasks/:taskId`

---

## 📸 **Screenshots**

(Add screenshots of your pages here: login, project page, tasks page)

---

## 🔗 **GitHub Repositories**

* **Frontend:** [https://github.com/sagaradhikari072819/Frontend-Final-Pro-Tasker](https://github.com/sagaradhikari072819/Frontend-Final-Pro-Tasker)
* **Backend:** [https://github.com/sagaradhikari072819/Backend-Final-Pro-Tasker](https://github.com/sagaradhikari072819/Backend-Final-Pro-Tasker)

---

## 📄 **License**

MIT License

---

# 🎤 **5-Minute Presentation Script (simple & confident)**

**Hi everyone, my name is Milan, and today I’m presenting my full-stack project called Pro-Tasker.
This is a task and project management application built using React, TypeScript, Tailwind, Node.js, Express, and MongoDB.**

---

### **1. What the project does**

Pro-Tasker allows users to register, verify their account, log in, and manage their own projects and tasks.
A verified user can create, update, and delete projects, and each project can have multiple tasks connected to it.

---

### **2. Why I built it**

While building this project, I wanted to improve my skills in connecting a React frontend with a Node and Express backend.
I faced real challenges like Axios errors, deployment failures, and TypeScript issues—so this app helped me learn full-stack debugging and real-world coding problems.

---

### **3. How it works**

Once the user logs in, they can see all their projects.
They can create new projects, update the project details, and delete them if needed.
Inside each project, they can also add tasks, update task status, and remove tasks.
The entire app is secure, and users can only modify their own content.

---

### **4. Tech Stack**

The frontend is built with React, TypeScript, Tailwind, and Axios for API calls.
The backend uses Node.js, Express, MongoDB, JWT authentication, and bcrypt for password hashing.
The two communicate through REST APIs.

---

### **5. Challenges**

The biggest challenges were:

* Connecting frontend & backend
* Fixing Axios CORS issues
* Solving TypeScript errors
* Deploying on Netlify & Render
  Working through these taught me how to troubleshoot errors and understand how full-stack applications work behind the scenes.

---

### **6. Conclusion**

Pro-Tasker helped me gain confidence as a full-stack developer because I built everything—from database models, APIs, authentication, to the frontend UI and TypeScript types.

Thank you

