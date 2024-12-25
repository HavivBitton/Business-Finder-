import axios from "axios";

const getAllBusinessPosts = async (): Promise<any[]> => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/businessPosts/",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};

export default getAllBusinessPosts;
