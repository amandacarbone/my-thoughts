import React, { useState } from 'react';
import { Post } from '../models/Post';

interface Props {
    onSubmit: (post: Post) => void,
    onClose: () => void
}

export function PostForm({onSubmit, onClose}: Props) {

        const [title, setTitle] = useState("");
        const [thought, setThought] = useState("");

    return (
        <div>
            <form className="postForm">
                <h3>Title</h3>
                <input className="titleInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <h3>Thought</h3>
                <textarea className="thoughtInput" value={thought} onChange={(e) => setThought(e.target.value)}></textarea>
                <button className="addPost" onClick={() => onSubmit({title, thought})}>Add Post</button>
                <button className="material-icons" onClick={() => onClose()}>cancel</button>
            </form>
        </div>
    )

}