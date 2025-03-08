import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "./utils/userSlice.js";
import { BASE_URL } from "./utils/Constants.js";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password validation: Min 6 characters, at least 1 number, 1 uppercase
  const isValidPassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  };

  const handleLogin = async () => {
    setError(""); // Clear previous errors

    // Input Validations
    if (!emailId || !password) {
      return setError("Email and password are required.");
    }

    if (!isValidEmail(emailId)) {
      return setError("Invalid email format.");
    }

    if (!isValidPassword(password)) {
      return setError(
        "Password must be at least 6 characters long, include one uppercase letter and one number."
      );
    }

    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data)); // Save user in Redux
      navigate("/feed"); // Redirect on success
    } catch (error) {
      setError(error?.response?.data || "Invalid email or password.");
      console.log(error);
    }
  };

  const handleSignUp=async()=>{
    setError(""); // Clear previous errors

    // Input Validations
    if (!emailId || !password) {
      return setError("Email and password are required.");
    }

    if (!isValidEmail(emailId)) {
      return setError("Invalid email format.");
    }

    if (!isValidPassword(password)) {
      return setError(
        "Password must be at least 6 characters long, include one uppercase letter and one number."
      );
    }

    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName,lastName,emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data)); // Save user in Redux
      navigate("/profile"); // Redirect on success
    } catch (error) {
      setError(error?.response?.data || "Invalid email or password.");
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="card w-96 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Login</h2>
        <div className="mt-4">
          { !isLoggedIn&&
            <>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </>
          }

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email ID"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          {isLoggedIn?(<button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>):(<button
            onClick={handleSignUp}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>)}
        </div>
        {isLoggedIn?(<p className="text-gray-400 text-sm text-center mt-3">
          Don't have an account?{" "}
          <span onClick={()=>setIsLoggedIn(val=>!val)} className="text-blue-400 cursor-pointer ">
            Sign up
          </span>
        </p>):<p className="text-gray-400 text-sm text-center mt-3">
          Already have an account?{" "}
          <span onClick={()=>setIsLoggedIn(val=>!val)} className="text-blue-400 cursor-pointer ">
            Sign in
          </span>
        </p>}
      </div>
    </div>
  );
};

export default Login;
