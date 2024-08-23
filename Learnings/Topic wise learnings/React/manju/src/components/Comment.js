import React, { useState } from 'react';
import CommentList from './CommentList';

const Comment = ({ comment, addComment, deleteComment, editComment }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment.text);

    const handleEdit = () => {
        editComment(comment.id, editText);
        setIsEditing(false);
    };

    return (
        <div className="comment">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            ) : (
                <div>
                    <p>{comment.text}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteComment(comment.id)}>Delete</button>
                </div>
            )}
            <div>
                <input type="text" placeholder="no of them" id={`reply-${comment.id}`} />
                <button onClick={() => {
                    const input = document.getElementById(`reply-${comment.id}`);
                    addComment(input.value, comment.id);
                    input.value = '';
                }}>Reply</button>
            </div>
            {comment.children.length > 0 && (
                <CommentList
                    comments={comment.children}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    editComment={editComment}
                />
            )}
        </div>
    );
};

export default Comment;
