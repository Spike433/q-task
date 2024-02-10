import React from "react";
import { useParams } from "react-router";
import { CommentCard } from "src/components/posts/comment-card";
import { ApiServices } from "src/services";
import { Post } from "src/services/types";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useMounted } from "src/hooks/use-mounted";
import { isIdValid } from "src/utils/id-validator";
import { parseHttpErrorMessages } from "src/utils/httpErrorParse";
import LoadingIndicator from "src/components/core/loading-indicator/loading";
import { consoleMessage } from "src/utils/app.config";

export function PostDetails() {
    const { postId } = useParams();
    const isMounted = useMounted();

    const [post, setPost] = React.useState<Post | null>(null);
    const [isLoading, setLoading] = React.useState(false);
    const [backendValidationErrors, setBackendValidationErrors] = React.useState<string[]>([]);
        
    React.useEffect(() => {
        const controller = new AbortController();
        
        if(!isIdValid(postId)){
            controller.abort();
            return;
        };

        setLoading(true);
            
        Promise.all([
            ApiServices.postService.getPostById(+postId!),
            { signal: controller.signal }
        ])
        .then(([{ data: post }]) => {
            if(isMounted()){
                setPost(post);
            }
        })
        .catch(error => {
            if(isMounted()){
                setBackendValidationErrors(parseHttpErrorMessages(error));
            }
        })
        .finally(() => {
            if(isMounted()){
                setLoading(false);
            }
        });
    }, [postId, isMounted]);

    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : backendValidationErrors.length > 0 ? (
                <NotFoundPage />
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
                                    comment={comment} 
                                    logMessage={consoleMessage}
                                />
                            ))}
                        </>
                    ) : null}
                </>
            )}
        </>
    );
}