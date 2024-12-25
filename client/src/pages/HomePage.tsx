import { useEffect, useState } from "react";
import getAllBusinessPosts from "../api/BusinessPost.ts";

import { Post } from "../../types.ts";

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getAllBusinessPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    loadPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="bg-blue-500 text-white p-4 rounded">
        This is a test of TailwindCSS!
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post._id} className="border border-gray-500 rounded-3xl">
            <h2>{post.name}</h2>
            <p>{post.description}</p>
            <strong>Category:</strong> {post.category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
