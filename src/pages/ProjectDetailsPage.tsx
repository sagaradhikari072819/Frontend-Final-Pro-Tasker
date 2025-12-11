import { useEffect, useState } from "react";
import { apiClient } from "../clients/api";
import { Link, useParams } from "react-router-dom";
import type { Project, Task } from "../types";
import CommonButton from "../components/CommonButtons";

function ProjectDetailsPage() {
  const [project , setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [dpp, setDpp] = useState("");

  const [name, setName] = useState('');
  const [dpt, setDpt] = useState('')
  const [status, setStatus] = useState("todo");
    
  const { projectId } = useParams();

  //projects info
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get(`/api/projects/${projectId}`);
        console.log(res.data);
        setProject(res.data);

        setName(res.data.name);
        setDpp(res.data.description)
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  // Another useEffect for tasks
  useEffect(() => {
    const fetchProjectTasks = async () => {
      try {
        const tasks = await apiClient.get(`/api/projects/${projectId}/tasks`);
        // state
        setTasks(tasks.data);
        // loading error
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjectTasks();
  }, [projectId]);

  if (loading) return <div className="text-2xl text-blue-300">Loading...</div>;

  if (error) return <div className="text-red-500 text-xl">{error}</div>;

  // create a task
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiClient.post(`/api/projects/${projectId}/tasks`, {
        title,
        description: dpt,
        status,
      });
      setTasks((prev) => [...prev, res.data]);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    } finally {
      setTitle("");
      setDpt("");
      setStatus("")
    }
  };

  const updateProject = async () => {
    try {
      const res = await apiClient.put(`/api/projects/${projectId}`, {
        name,  dpp
      })
      setProject(res.data)
      alert("project has updated")
    } catch (error) {
      console.error(error)
    }
  }

  const deleteProject = async () => {
    if (!confirm("DELETE PROJECT????"))
      return;
    try {
      const res = await apiClient.delete(`/api/projects/${projectId}`)
      console.log(res.data);

      alert("Project Deleted")
      
    } catch (error) {
      console.error(error)
    }
    
  }

  return (
    <div className="min-h-screen p-6 bg-black text-blue-300">

       <div className="min-h-screen p-6 bg-black text-blue-300">
          <h1 className="ax-w-xl mx-auto space-y-6 text-3xl">Project Details</h1>{project &&(
        <div>
          <label className="block text-gray-300 mb-1 text-2xl">Name</label>
          <input
            className="w-full p-2 rounded bg-gray-900 border border-black-700 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>)}

        <div>
          <label className="block text-gray-300 mb-1 text-2xl">Description</label>
          <textarea
            className="w-full p-2 rounded bg-gray-900 border border-black-700 text-white"
            rows={3}
            value={dpp}
            onChange={(e) => setDpp(e.target.value)}
          ></textarea>
        </div>

        <div className="flex gap-3 my-3">
          <CommonButton
            label="Update Project"
            color="blue"
            onClick={updateProject}
          />
          <CommonButton
            label="Delete Project"
            color="red"
            onClick={deleteProject}
          />
          <Link
            to={`/projects`}
            className="inline-block mb-4 px-4 py-2 bg-gray-700 rounded"
          >
            Back to Projects
          </Link>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="border p-2 h-50 mt-10 flex flex-col gap-2 rounded"
      >

        <label htmlFor="project-name">Task Title: </label>
        <input
          type="text"
          name="task-title"
          className="border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="task-description">Task Description</label>
        <input
          type="text"
          name="task-description"
          className="border"
          value={dpt}
          onChange={(e) => setDpt(e.target.value)}
        />
          <label htmlFor="task-status">Task Status</label>
        <input
          type="text"
          name="task-status"
          className="border"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="submit"
          value="Create Task"
          className="mt-auto bg-sky-500 rounded"
        />
        {/* <button className="bg-sky-500 px-4 py-2 rounded w-full mt-2">
          Create Task
        </button> */}
      </form>

      {/* <div>
        <Link to="/projects" className="mt-auto bg-sky-500 rounded px-3 py-1">
          Back to Projects
        </Link>
      </div> */}

      <div className="w-full flex gap-5 mt-10">
        {tasks &&
          tasks.map((task) => (
            <div
              key={task._id}
              className="text-white w-50 flex flex-col h-50 border border-red-500 p-2 text-center rounded"
            >
              <div className="font-bold">{task.title}</div>
              <div>{task.description}</div>
              <Link
                to={`/projects/${projectId}/tasks/${task._id}`}
                className="mt-auto bg-sky-500 rounded"
              >
                View Task
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
