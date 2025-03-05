import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-black h-screen text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"
          
          className="object-cover object-center w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
          DevMeet
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl">
          The ultimate matchmaking platform for developers. Connect, collaborate, and code together like never before. 🚀
        </p>
        <div className="mt-6 flex space-x-4">
          <Link 
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
          >
            Sign Up
          </Link>
          
        </div>
        <p className="mt-6 text-sm text-gray-400 italic">Swipe right to code, swipe left to debug. 💻🔥</p>
      </div>
    </div>
  );
};

export default Hero;