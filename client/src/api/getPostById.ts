import axios from "axios";
import { Post } from "../../types";

const getBusinessPostById = async (id: string): Promise<Post | null> => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/businessPosts/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID ${id}:`, error);
    return null;
  }
};

export default getBusinessPostById;
