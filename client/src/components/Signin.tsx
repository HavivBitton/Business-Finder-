import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginUser from "../api/loginUser";
import { jwtDecode } from "jwt-decode";
import { useDispatch, UseDispatch } from "react-redux";
import {
  setName,
  setEmail,
  setId,
  setImageUrl,
  setPlan,
} from "@/store/userSlice";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      await loginUser(formData);
      // alert("Login successful!");
      // bring data from jwt
      const decoded = jwtDecode(Cookies.get("jwt"));
      console.log(decoded);

      dispatch(setId(decoded.user.userId));
      dispatch(setEmail(decoded.user.email));
      dispatch(setName(decoded.user.username));
      dispatch(setPlan(decoded.user.plan));
      dispatch(setImageUrl(decoded.user.imageUrl));

      navigate("/business-posts-feed"); // Redirect to the home page
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
          className="border rounded p-2"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
