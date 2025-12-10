import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-800 text-white">
      <h1 className="text-5xl font-bold mb-4">Project Manager App</h1>

      <p className="text-gray-300 text-lg mb-8 p-5">
       Please Register to manage your projects if you are not a registered user or Login.
      </p>

     <div className="space-x-4">
        <Link 
          to="/login" 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
        >
          Login
        </Link>

        <Link 
          to="/register" 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Register
        </Link>
      </div>

      {/* <ProjectsPage/> */}
    </div>
  );
}
export default HomePage;