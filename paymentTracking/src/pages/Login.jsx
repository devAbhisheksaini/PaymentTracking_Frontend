import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let mockUser = {
      email: "admin@gmail.com",
      password: "admin123",
    };
    const getUser = {
      email: email,
      password: password,
    }
    if (getUser.email !== mockUser.email || getUser.password !== mockUser.password) {
      alert("Invalid email or password");
      return;
    }
    mockUser = {
        email: "admin@gmail.com",
        role: "admin" ,
        name: "Admin User",
    };

    login(mockUser);
    navigate("/");
  };

  return (
    <div>
      <div className="login bg-indigo-600 h-screen flex justify-center items-center">
        <div className="login-container bg-slate-300 p-10 rounded-lg">
          <h1 className="text-2xl py-3">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 px-4 py-2 text-white rounded-full font-medium hover:bg-indigo-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
