import React, { useState } from "react";
import Header from "../global/Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const handleToggleSignIn = () => setIsSignedIn(!isSignedIn);
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <form className="flex justify-center items-center h-screen">
          <div className=" bg-gradient-to-b from-black/75 to-black/60 h-9/12 w-3/12 p-12 bg-opacity-50 ">
            <h1 className="text-white mb-3 font-extrabold text-4xl">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignedIn && (
              <input
                className="text-white text-lg font-semibold bg-gradient-to-b from-white/10 to-white/10 p-5 w-[100%] my-4 border rounded-sm border-[#acacac]"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              className="text-white text-lg font-semibold bg-gradient-to-b from-white/10 to-white/10 p-5 w-[100%] my-4 border rounded-sm border-[#acacac]"
              type="email"
              placeholder="Email or phone number"
            />
            <input
              className="text-white text-lg font-semibold bg-gradient-to-b from-white/10 to-white/10 p-5 w-[100%] my-4 border rounded-sm border-[#acacac]"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-600 mt-6 w-full hover:bg-red-700 text-white font-bold py-4 px-4 rounded">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-white mt-6">
              {isSignedIn ? "New to Netflix? " : "Already have an account? "}
              <span
                onClick={handleToggleSignIn}
                className="text-white hover:underline font-bold cursor-pointer"
              >
                {isSignedIn ? "Sign up now." : "Sign in now."}
              </span>
            </p>
            <p className="text-white mt-6">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="text-white font-bold cursor-pointer">
                Learn more.
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
