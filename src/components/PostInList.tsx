import { Post } from "../models/Post";

interface Props {
    post: Post;
    onDelete: () => void;
}

export function PostInList({post, onDelete}: Props) {

    return (
        <div className="postInList">
            <h2 className="postTitle">{post.title}</h2>
            <p className="postThought">{post.thought}</p>
            <div className="delete">
                <button className="material-icons" type="button" onClick={onDelete}>delete</button>
            </div>
        </div>
    )

}