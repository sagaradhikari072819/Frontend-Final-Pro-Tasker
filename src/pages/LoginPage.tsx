import { useState, useContext, type ChangeEvent } from "react";
import { AuthContext } from "../context/AuthProvider";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(form.email, form.password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-cyan-300">
    <div className="flex flex-col items-center w-80">
      <h2 className="text-3xl mb-6 font-bold mt-5  ">Login</h2>

      <form className="w-80 space-y-4" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />

        <button
          className="w-full p-3 bg-black 
  text-cyan-300 
  rounded 
  border border-cyan-500/60 
  [text-shadow:_0_0_10px_rgba(0,255,255,0.9)] 
  focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
        >
          Login
        </button>
      </form>
    </div>
     </div>
  );
}

export default LoginPage;
