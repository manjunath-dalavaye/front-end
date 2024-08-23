// import React, { useEffect, useState } from "react";
// function Comments() {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     fetch('https://dummyjson.com/comments?limit=10&skip=10&select=body,postId')
//       .then(res => res.json())
//       .then(data => {
//         setComments(data.comments);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Something went wrong", err);
//         setError(err);
//         setLoading(false);
//       });
//   }, []);
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <div>
//       <h4>Comments</h4>
//       <ul>
//         {comments.map((comment) => (
//           <li key={comment.id}>
//             <strong>{comment.user.username}:</strong> {comment.body}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Comments;


// entire data fetching for cred operations
import React, { useEffect, useState } from "react";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editComment, setEditComment] = useState({ id: null, body: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/comments");
      setComments(response.data.comments);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() === "") return;
    try {
      const response = await axios.post("https://dummyjson.com/comments/add", {
        body: newComment,
        postId: 1,
        userId: 1, 
      });
      setComments([response.data, ...comments]);
      setNewComment("");
    } catch (err) {
      setError(err);
    }
  };

  const handleEditComment = async () => {
    if (editComment.body.trim() === "") return;
    try {
      const response = await axios.post(
        `https://dummyjson.com/comments/${editComment.id}`,
        {
          body: editComment.body,
        }
      );
      setComments(
        comments.map((comment) =>
          comment.id === editComment.id ? response.data : comment
        )
      );
      setEditComment({ id: null, body: "" });
    } catch (err) {
      setError(err);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h4>Comments</h4>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a new comment"
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {editComment.id === comment.id ? (
              <div>
                <input
                  type="text"
                  value={editComment.body}
                  onChange={(e) =>
                    setEditComment({ ...editComment, body: e.target.value })
                  }
                />
                <button onClick={handleEditComment}>Update Comment</button>
                <button
                  onClick={() => setEditComment({ id: null, body: "" })}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <strong>{comment.user.username}:</strong> {comment.body}
                <button
                  onClick={() =>
                    setEditComment({ id: comment.id, body: comment.body })
                  }
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteComment(comment.id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
