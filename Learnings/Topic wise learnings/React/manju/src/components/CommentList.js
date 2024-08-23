import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, addComment, deleteComment, editComment }) => {
    return (
        <div>
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    editComment={editComment}
                />
            ))}
        </div>
    );
};

export default CommentList;
