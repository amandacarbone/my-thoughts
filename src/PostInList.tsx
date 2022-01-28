import { Post } from "./Post";

export function PostInList(props: {post: Post}) {

    return (
        <div>
            <h2 className="postTitle">{props.post.title}</h2>
            <p className="postThought">{props.post.thought}</p>
        </div>
    )

}