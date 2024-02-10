import { Comment } from "src/services/types";
import { WithLogging } from "../core/logger/logger";

interface CommentProps {
    comment: Comment;
}

const CommentCardBase = ({comment}: CommentProps) => {
    return (
        <div key={comment.id}  
          style={{ margin:'10px', paddingLeft:'10px',paddingBottom:'10px', paddingRight:'10px', border: '2px solid #ccc', backgroundColor: '#f3f1f1', borderRadius: '5px' }}>
          <p style={{ color: '#666', fontFamily: 'Arial' }}>{comment.text}</p>            
          <span style={{  display: 'block', textAlign: 'right', color: '#8f8b8b', fontFamily: 'Arial' }}>{comment.nickname}</span>
        </div>
    );
}

export const CommentCard = WithLogging(CommentCardBase, 'CommentCard');