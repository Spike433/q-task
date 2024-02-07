import { Post } from "src/services/types";

interface PostProps {
    post: Post;
}

export function PostCard({post}: PostProps){
    return (
        <div 
          key={post.id} 
          style={{ 
            border: '3px solid #ccc', 
            padding: '20px', 
            margin: '10px', 
            flex: '1 0 46%', 
            boxSizing: 'border-box',
            backgroundColor: '#f5f2f2b7',
            borderRadius: '5px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
            <h2 style={{ color: '#333', fontFamily: 'Arial' }}>{post.title}</h2>
            <img 
              style={{ margin: '5px' }}
              src={`https://picsum.photos/seed/${post.id}/70`} 
              alt="Post"           
            />
          </div>
          <hr/>
          <p style={{ color: '#666', fontFamily: 'Arial' }}>{post.description}</p>
          <h4>
            <span style={{ display: 'block', textAlign: 'right', fontStyle:'italic', color: '#817f7f', fontFamily: 'Arial' }}>{post.author}</span>
          </h4>
          <h3 style={{ color: '#666', fontFamily: 'Arial' }}>Comments</h3>
          
          {post.comments.map((comment) => (
            <div key={comment.id}  
              style={{ margin:'10px', paddingLeft:'10px',paddingBottom:'10px', paddingRight:'10px', border: '2px solid #ccc', backgroundColor: '#f3f1f1', borderRadius: '5px' }}>
              <p style={{ color: '#666', fontFamily: 'Arial' }}>{comment.text}</p>            
              <span style={{  display: 'block', textAlign: 'right', color: '#8f8b8b', fontFamily: 'Arial' }}>{comment.nickname}</span>
            </div>
          ))}
        </div>
    );
}