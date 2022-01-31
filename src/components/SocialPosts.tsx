import { useState } from "react";
import Modal from "react-modal";
import { Post } from "../models/Post";
import { PostForm } from "./PostForm";
import { PostInList } from "./PostInList";
import "./PostForm.css";
import "./PostInList.css";

export function SocialPosts() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [showForm, setShowForm] = useState(false);

    function onDelete(index: number) {
       const newList = posts.slice(0);

       newList.splice(index, 1);

       setPosts(newList);
    };

    function handleForm() {
        setShowForm(!showForm);
    };

    function handleSubmit(post: Post) {
        setPosts([...posts, post]);
        handleClose();
    };

    function handleClose() {
        setShowForm(false);
    }

    return (
        <div className="socialPosts">
            <button className="newThought" onClick={() => handleForm()}>New Thought</button>
            <div className="postsFeed">
                {posts.map((post, i) => <PostInList key={i} post={post} onDelete={() => onDelete(i)}></PostInList>)}
            </div>
            <Modal
            isOpen={showForm}
            className={"PostForm"}
            >
            {showForm && <PostForm onSubmit={handleSubmit} onClose={handleClose}></PostForm>}
            </Modal>
        </div>
    )

}