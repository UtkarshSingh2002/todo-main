import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import './style.css';  // Import your custom CSS

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed up");
      navigate("/login");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-transparent-black shadow-lg rounded-lg p-8 ">
        <h2 className="text-3xl font-extrabold text-center text-dark-mode mb-6">
          Sign Up
        </h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border input-dark-mode rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border input-dark-mode rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full btn-dark-mode p-3 rounded-lg shadow-md transition"
        >
          Sign Up
        </button>
        <div className="text-center mt-4">
          <p className="text-gray-400">
            Already signed up?{" "}
            <a
              href="/login"
              className="link-dark-mode hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
