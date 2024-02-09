import React, { useCallback } from "react";
import { useParams } from "react-router";
import { CommentCard } from "src/components/posts/comment-card";
import { ApiServices } from "src/services";
import { Post } from "src/services/types";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useMounted } from "src/hooks/use-mounted";

export function PostDetails() {
    const { postId } = useParams();
    const isMounted = useMounted();
    const [post, setPost] = React.useState<Post | null>(null);
    const [isLoading, setLoading] = React.useState(false);
    console.log('renders');
    
    React.useEffect(() => {
        const controller = new AbortController();
        
        if(postId === undefined || isNaN(+postId)){
            controller.abort();
            return;
        };

        setLoading(true);
            
        Promise.all([
            ApiServices.postService.getPostById(+postId),
            { signal: controller.signal }
        ])
        .then(([{ data: post }]) => {
            if(isMounted()){
                setPost(post);
            }            
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [postId, isMounted]);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (    
                <>            
                    {post ? (
                        <>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <h3>Comments</h3>
                            {post.comments?.map(comment => (
                                <CommentCard 
                                    key={comment.id} 
                                    comment={comment} />
                            ))}
                        </>
                    ) : <NotFoundPage />}
                </>
            )}
        </>
    );
}