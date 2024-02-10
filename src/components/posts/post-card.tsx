import { Post } from "src/services/types";
import { CommentCard } from "./comment-card";
import { useRouter } from "src/hooks/use-router";
import { withLogging } from "../core/logger/logger";

interface PostProps {
    post: Post;
    logMessage: string;
}

const PostCardBase = ({post, logMessage}: PostProps) => {
  const navigation = useRouter();

  const handlePostClick = (id: number) => {
    navigation.push(`/posts/${id}`);
  }
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
            borderRadius: '5px',
            cursor: 'pointer'
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={() => handlePostClick(post.id)}
          onClick={() => handlePostClick(post.id)}
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
            <CommentCard 
              key={comment.id} 
              comment={comment} 
              logMessage={logMessage}
              />
          ))}
        </div>
    );
}

export const PostCard = withLogging(PostCardBase, 'PostCard');