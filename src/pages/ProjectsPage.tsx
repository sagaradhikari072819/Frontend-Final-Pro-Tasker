import { useEffect, useState } from "react";
import { apiClient } from "../clients/api";
import { Link } from "react-router-dom";
import type { Project } from "../types";

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get("/api/projects");
       // console.log(res.data);
        setProjects(res.data);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="text-3xl text-white">Loading...</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await apiClient.post("/api/projects", { name, description });
      setProjects((prev) => [...prev, res.data]);
    } catch (error:any) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
      setName("")
      setDescription("")
    }
  };
  return (
    <div className="text-cyan-300 min-h-screen p-6">
      <h1 className="   text-4xl font-bold mb-6 
      tracking-wider 
      [text-shadow:_0_0_12px_rgba(0,255,255,0.8)]
      border-b border-cyan-500/40 pb-2">Projects</h1>

      <form
        onSubmit={handleSubmit}
        className="  w-full max-w-md 
      border border-cyan-500/40 
      p-4 rounded-lg 
      bg-black/40 
      backdrop-blur-md 
      flex flex-col gap-3
      shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      >
        <label htmlFor="project-name">Project Name: </label>
        <input
          type="text"
          name="project-name"
          className="   w-full p-2 rounded 
        bg-black border border-cyan-500/60 
        text-cyan-300 
        focus:outline-none 
        focus:ring-2 focus:ring-cyan-500/60"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="project-description">Project Description</label>
        <input
          type="text"
          name="project-description"
          className="  w-full p-2 rounded 
        bg-black border border-cyan-500/60 
        text-cyan-300 
        focus:outline-none 
        focus:ring-2 focus:ring-cyan-500/60"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* <input
          type="submit"
          value="Create Project"
          className="mt-auto bg-sky-500 rounded"
        /> */}
          <button className=" w-full mt-4 p-3 
        bg-black 
        text-cyan-300 
        rounded 
        border border-cyan-500/60 
        hover:bg-cyan-500/20 
        transition 
        [text-shadow:_0_0_10px_rgba(0,255,255,0.9)]
        focus:outline-none 
        focus:ring-2 focus:ring-cyan-500/60"> Create Project
        </button>
      </form>

      {error && <div className="text-red-400 mt-4">{error}</div>}

      <div className="w-full flex flex-wrap gap-5 mt-10">
        {projects &&
          projects.map((project) => (
            <div
              key={project._id}
              className=" w-60 flex flex-col p-4 rounded 
            bg-black/40 backdrop-blur-md 
            border border-cyan-500/40 
            text-center text-cyan-300 
            shadow-[0_0_15px_rgba(0,255,255,0.25)]"
            >
              <div className="font-bold text-lg mb-2">{project.name}</div>
              <div className="mb-4">{project.description}</div>
              <Link
                to={`/projects/${project._id}`}
                className="mt-auto p-2 rounded 
              bg-black 
              border border-cyan-500/60 
              text-cyan-300 
              hover:bg-cyan-500/20 
              transition 
              [text-shadow:_0_0_8px_rgba(0,255,255,0.9)]"
              >
                See Project
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectsPage;