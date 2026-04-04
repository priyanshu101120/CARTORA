import { useState } from "react";
import { supabase } from "../../supabase/supabase";

const Auth = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) alert(error.message);
      else {
        alert("Login Successful 🚀");
        onClose(); // Close the modal on successful login
      }
    } else {
      // SIGNUP
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) alert(error.message);
      else alert("Signup Successful 🎉 Check your email");
    }
  };

  return (
    <div className="flex items-center justify-center h-100 bg-white ">
      <form
        onSubmit={handleAuth}
        className="bg-white rounded-2xl shadow-[0_4px_18px_rgba(0,0,0,0.25)] w-80  border-black border-2 hover:border-black p-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p className="text-sm text-center mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
