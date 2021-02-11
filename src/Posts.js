const Posts = ({posts}) => {

    return (
        <div>
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