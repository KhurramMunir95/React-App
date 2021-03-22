const Posts = ({posts, title}) => {

    return (
        <div>
            <h1> {title} </h1>
            {posts.map((post) => (
            <div key={post.id}>
                <p>
                    {post.id} - {post.username}
                </p>
            </div>
          ))}
        </div>
        
     );
}
 
export default Posts;