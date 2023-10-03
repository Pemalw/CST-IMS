import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const predefinedPassword="12345678"
  const predefinedUsername="admin"

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password match the predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
        navigate("/admin");
    } else {
      // The login failed
      // TODO: Display an error message to the user
    }
  };

  return (
    <div className="my-4 flex justify-center self-center  ">
        <form onSubmit={handleSubmit} className="self-center justify-center w-1/3 border-2 rounded-md shadow-md opacity-70 bg-slate-200">
            <div className="my-4 flex flex-col mx-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 ">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-slate-500 focus:ring-1 sm:text-sm"
            />
            </div>
            <div className="mb-4 flex flex-col mx-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-slate-500 focus:ring-1 sm:text-sm"
            />
            </div>
            <button type="submit" className="btn btn-primary ms-4 mb-4 hover:bg-blue-400 ">Login</button>
        </form>
    </div>
  
  );
};

export default LoginForm;
