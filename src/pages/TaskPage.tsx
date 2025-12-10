import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommonButton from "../components/CommonButtons";
import { apiClient } from "../clients/api";
import type { Task } from "../types";

function TaskPage() {
  const { projectId, taskId } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Editable fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  useEffect(() => {
    const fetchTask = async () => {
      console.log("Entering useEffect");
      try {
        setLoading(true);
        const res = await apiClient.get(
          `/api/projects/${projectId}/tasks/${taskId}`
        );

        setTask(res.data);
        console.log("TASKS FETCH", res.data);

        // Populate form
        setTitle(res.data.title);
        setDescription(res.data.description);
        setStatus(res.data.status);
      } catch (err: any) {
        console.log("Error for getting task", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [projectId, taskId]);

  if (loading)
    return <div className="text-white text-2xl">Loading Task...</div>;
  if (error) return <div className="text-red-500 text-xl">{error}</div>;
  if (!task) return <div className="text-white text-xl">Task not found.</div>;

  // Update task handler
  const handleUpdate = async () => {
    try {
      const res = await apiClient.put(
        `/api/projects/${projectId}/tasks/${taskId}`,
        { title, description, status }
      );

      setTask(res.data);
      alert("Task updated successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  // Delete task handler
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this task?")) return;

    try {
      await apiClient.delete(`/api/projects/${projectId}/tasks/${taskId}`);

      alert("Task deleted.");
      navigate(`/projects/${projectId}`);
    } catch (err) {
      console.error(err);
    }
  };
  //from Abel on discord>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //     const deleteTask = async (req, res) => {
  //     try {
  //         // This needs an authorization check
  //         //get to be update task
  //         const getDeleteTask = await Task.findById(req.params.taskId);
  //         if (!getDeleteTask) {
  //             return res.status(400).json({ message: "Invalid Task ID" });
  //         }
  //         //find the project owner
  //         const projectId = getDeleteTask.project;
  //         console.log(projectId);
  //         const getUpdateProject = await Project.findById(projectId);
  //         if (!getUpdateProject) {
  //             return res.status(400).json({ message: "Invalid project ID" });
  //         }
  //         // check if the user field on that task matches the authenticated user’s _id.
  //         if (getUpdateProject.user.toString() !== req.user._id) {
  //             return res
  //                 .status(403)
  //                 .json({ message: "Not Authorize to update this task" });
  //         }
  //         const task = await Task.findByIdAndDelete(req.params.taskId);
  //         if (!task) {
  //             return res.status(404).json({ message: "No task found with this id!" });
  //         }
  //         res.json({ message: "task deleted!" });
  //     } catch (err) {
  //         res.status(500).json(err);
  //     }
  // };
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div className="text-white max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Task Details</h1>

      {/* Task Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-1">Title</label>
          <input
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Status</label>
          <select
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <CommonButton
            label="Update Task"
            color="blue"
            onClick={handleUpdate}
          />
          <CommonButton
            label="Delete Task"
            color="red"
            onClick={handleDelete}
          />
          <Link
            to={`/projects/${projectId}`}
            className="inline-block mb-4 px-4 py-2 bg-gray-700 rounded"
          >
            Back to Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
