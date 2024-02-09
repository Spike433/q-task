import React from "react";
import { useParams } from "react-router";
import { CommentCard } from "src/components/posts/comment-card";
import { ApiServices } from "src/services";
import { Post } from "src/services/types";

export function PostDetails() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = React.useState<Post>();
    const [isLoading, setLoading] = React.useState(false);
    
    React.useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
    
        Promise.all([
        ApiServices.postService.getPostById(1),
        { signal: controller.signal }
        ])
        .then(([{ data: post }]) => {
            setPost(post);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [id]);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{post?.title}</h2>
                    <p>{post?.description}</p>
                    <h3>Comments</h3>
                    {post?.comments.map(comment => (
                        <CommentCard 
                            key={comment.id} 
                            comment={comment} />
                    ))}
                </div>
            )}
        </>
    );
}