import axios from "axios";
import { User } from "types";

const registerUser = async (user: User): Promise<void> => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users/signup",
      user,
      { withCredentials: true }
    );
    console.log("User registered successfully:", response.data);
  } catch (error: any) {
    console.error(
      "Failed to register user:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data.error || "Failed to register user");
  }
};

export default registerUser;
