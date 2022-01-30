import React, { useState } from 'react';
import { Post } from '../models/Post';

interface Props {
    onSubmit: (post: Post) => void,
    onClose: () => void
}

export function PostForm({onSubmit, onClose}: Props) {

    function handleOnSubmit(e:any) {

        e.preventDefault()

        const newPost = {
            title: e.target[0].value,
            thought: e.target[1].value
        }

        onSubmit(newPost)

    }

    return (
        <div>
            <form className="postForm" onSubmit={handleOnSubmit}>
                <h3>Title</h3>
                <input className="titleInput" type="text"></input>
                <h3>Thought</h3>
                <textarea className="thoughtInput"></textarea>
                <button className="addPost">Add Post</button>
                <button className="material-icons" onClick={onClose}>cancel</button>
            </form>
        </div>
    )

}