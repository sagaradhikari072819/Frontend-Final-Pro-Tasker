import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className ="
  min-h-screen 
  flex flex-col justify-center items-center 
  bg-black 
  text-cyan-300 
  tracking-wide 
  shadow-[0_0_20px_rgba(0,255,255,0.4)] 
  border-t border-cyan-500/40
">
      <h1   className="
    text-5xl font-bold mb-4 
    text-cyan-300 
    tracking-wider 
    [text-shadow:_0_0_12px_rgba(0,255,255,0.8)] 
    border-b border-cyan-500/40 pb-2
  ">Project Manager App</h1>

      <p   className="
    text-cyan-300 text-lg mb-8 p-5 
    tracking-wide 
    [text-shadow:_0_0_8px_rgba(0,255,255,0.7)]
  ">
       Please Register to manage your projects if you are not a registered user or Login.
      </p>

     <div className="space-x-4">
        <Link 
          to="/login" 
         className="
  px-4 py-2 
  bg-black 
  text-cyan-300 
  rounded 
  border border-cyan-500/70 
  hover:bg-cyan-500/20 
  transition 
  [text-shadow:_0_0_10px_rgba(0,255,255,0.9)]
"
        >
          Login
        </Link>

        <Link 
          to="/register" 
          className="
  px-4 py-2 
  bg-black 
  text-cyan-300 
  rounded 
  border border-cyan-500/70 
  hover:bg-cyan-500/20 
  transition 
  [text-shadow:_0_0_10px_rgba(0,255,255,0.9)]
"
        >
          Register
        </Link>
      </div>

      {/* <ProjectsPage/> */}
    </div>
  );
}
export default HomePage;