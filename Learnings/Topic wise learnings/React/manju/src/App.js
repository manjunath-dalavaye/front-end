import React, { useState } from 'react';
import CommentList from './components/CommentList';
import './App.css';

const App = () => {
    const [comments, setComments] = useState([]);

    const addComment = (text, parentId = null) => {
        const newComment = {
            id: Date.now(),
            text,
            parentId,
            children: [],
        };

        if (parentId === null) {
            setComments([...comments, newComment]);
        } else {
            setComments(updateComment(comments, parentId, newComment));
        }
    };
        
    const updateComment = (comments, parentId, newComment) => {
        return comments.map(comment => {
            if (comment.id === parentId) {
                return { ...comment, children: [...comment.children, newComment] }; // Add new comment at the end
            }
            if (comment.children.length > 0) {
                return { ...comment, children: updateComment(comment.children, parentId, newComment) };
            }
            return comment;
        });
    };

    const deleteComment = (id) => {
        setComments(removeComment(comments, id));
    };

    const removeComment = (comments, id) => {
        return comments.filter(comment => comment.id !== id).map(comment => ({
            ...comment,
            children: removeComment(comment.children, id),
        }));
    };

    const editComment = (id, text) => {
        setComments(editCommentText(comments, id, text));
    };

    const editCommentText = (comments, id, text) => {
        return comments.map(comment => {
            if (comment.id === id) {
                return { ...comment, text };
            }
            if (comment.children.length > 0) {
                return { ...comment, children: editCommentText(comment.children, id, text) };
            }
            return comment;
        });
    };

    return (
        <div className="app">
            <h1>Comments Task</h1>
            <div>
                <input type="text" placeholder="Add a comment" id="new-comment" />
                <button onClick={() => {
                    const input = document.getElementById('new-comment');
                    addComment(input.value);
                    input.value = ' ';
                }}>Add Comment</button>
            </div>
            <CommentList
                comments={comments}
                addComment={addComment}
                deleteComment={deleteComment}
                editComment={editComment}
            />
        </div>
    );
};

export default App;
