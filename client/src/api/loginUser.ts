import axios from "axios";

interface LoginData {
  username: string;
  password: string;
}

const loginUser = async (data: LoginData): Promise<void> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/login",
      data,
      { withCredentials: true }
    );
    console.log("Login successful:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error(error.response?.data.message || "Login failed");
  }
};

export default loginUser;
