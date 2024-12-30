import getAllBusinessPosts from "../api/getAllBusinessPost.ts";
import { useQuery } from "@tanstack/react-query";

import { Post } from "../../types.ts";
import SinglePost from "./PostCard.tsx";

const PostsList = () => {
  const { isPending, isError, data, error, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllBusinessPosts,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div className="bg-blue-500 text-white p-4 rounded mb-2">
        This is a posts list!
      </div>
      <div className="flex flex-wrap gap-4">
        {isSuccess && data && data.length > 0 ? (
          data.map((post: Post) => <SinglePost post={post} key={post._id} />)
        ) : (
          <p className="text-gray-600">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
