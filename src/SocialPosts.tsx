import { useState } from "react";
import { Post } from "./Post";
import { PostForm } from "./PostForm";
import { PostInList } from "./PostInList";

export function SocialPosts() {

    const [posts, setPosts] = useState<Post[]>([]);

    return (
        <div className="socialPosts">
            <button className="newThought" onClick={() => <PostForm></PostForm>}>New Thought</button>
            <div className="postsFeed">
            {posts.map(post => <PostInList post={post}></PostInList>)}
            </div>
        </div>
    )

}