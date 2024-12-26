import { Post } from "../../types.ts";

interface SinglePostProps {
  post: Post;
}

const SinglePost = ({ post }: SinglePostProps) => {
  return (
    <div
      key={post._id}
      className="border border-gray-500 rounded-3xl p-4 shadow-md"
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
        <strong>Followers:</strong> {post.subscribers.length}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments:</h3>
        {post.reviews.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {post.reviews.map((review) => (
              <li key={review._id} className="bg-gray-100 p-2 rounded">
                <p>
                  <strong>{review.userId?.name || "Anonymous"}:</strong>{" "}
                  {review.comment}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(review.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
