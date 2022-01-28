

export function PostForm() {

    return (
        <div>
            <form className="postForm">
                <h3>Title</h3>
                <input className="titleInput" type="text"></input>
                <h3>Thought</h3>
                <textarea className="thoughtInput"></textarea>
                <button className="addPost">Add Post</button>
            </form>
        </div>
    )

}