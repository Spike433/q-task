import { Comment } from "src/services/types";

interface CommentProps {
    comment: Comment;
}

export function CommentCard({comment}: CommentProps){
    return (
        <div key={comment.id}  
          style={{ margin:'10px', paddingLeft:'10px',paddingBottom:'10px', paddingRight:'10px', border: '2px solid #ccc', backgroundColor: '#f3f1f1', borderRadius: '5px' }}>
          <p style={{ color: '#666', fontFamily: 'Arial' }}>{comment.text}</p>            
          <span style={{  display: 'block', textAlign: 'right', color: '#8f8b8b', fontFamily: 'Arial' }}>{comment.nickname}</span>
        </div>
    );
}