import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuBar from "@/components/MenuBar";
import getBusinessPostById from "../api/getPostById";
import PostPageDetails from "../components/PostPageDetails";
import { Post } from "../../types";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const fetchedPost = await getBusinessPostById(id);
          if (fetchedPost) {
            setPost(fetchedPost);
          } else {
            setError("Post not found.");
          }
        } catch (err: any) {
          setError(err.message || "Failed to fetch the post.");
        }
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div>
      <MenuBar />
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {post ? (
        <PostPageDetails post={post} />
      ) : (
        !error && <div className="text-gray-500 mt-4">Loading...</div>
      )}
    </div>
  );
};

export default PostPage;
