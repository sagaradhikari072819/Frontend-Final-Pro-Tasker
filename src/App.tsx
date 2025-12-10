import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/NavBar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <>
      <div className="p-5 bg-zinc-900 h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route
            path="/projects/:projectId/tasks/:taskId"
            element={<TaskPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
