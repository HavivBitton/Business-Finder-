import { Link } from "react-router-dom";
import { Post } from "../../types.ts";
import { Button } from "@/components/ui/button";

interface SinglePostProps {
  post: Post;
}

const PostCard = ({ post }: SinglePostProps) => {
  return (
    <div
      key={post._id}
      className="border border-gray-500 rounded-3xl p-4 shadow-md w-80"
    >
      <h2 className="text-xl font-bold">{post.name}</h2>
      <p className="text-gray-700">{post.description}</p>
      <p className="text-sm text-gray-500">
        <strong>Category:</strong> {post.category}
      </p>

      <div className="mt-2 text-sm">
        <strong>Owner:</strong> {post.owner?.name || "Unknown"}
      </div>

      <div className="mt-2 text-sm">
        <strong>Subscribers:</strong> {post.subscribers.length}
      </div>
      <div className="mt-2 text-sm">
        <strong>Reviews:</strong> {post.reviews.length}
      </div>
      <Link to={`/business-post/${post._id}`}>
        <Button variant="outline">See This Business</Button>
      </Link>
    </div>
  );
};

export default PostCard;
