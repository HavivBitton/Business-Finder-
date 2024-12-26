import { useEffect, useState } from "react";
import getAllBusinessPosts from "../api/getAllBusinessPost.ts";

import { Post } from "../../types.ts";
import SinglePost from "./PostCard.tsx";

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
      <div className="bg-blue-500 text-white p-4 rounded mb-2">
        This is a posts list!
      </div>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <SinglePost post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
