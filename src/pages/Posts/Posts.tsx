import React  from 'react';
import LoadingIndicator, {  } from 'src/components/core/loading-indicator/loading';
import { PostCard } from 'src/components/posts/post-card';
import { PostSearch } from 'src/components/posts/post-search';
import { useDebounce } from 'src/hooks/use-debounce';
import { useMounted } from 'src/hooks/use-mounted';
import { usePostSearch } from 'src/hooks/use-search-params';
import { ApiServices } from 'src/services';
import { Post } from 'src/services/types';

export function PostsPage(){  
  const postsSearch = usePostSearch();
  const isMounted = useMounted();
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setLoading] = React.useState(false);

  const consoleMessage = "Hello from component using HOC: ";
  const debouncedSearch = useDebounce(postsSearch.state.query, 250);
  
  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    Promise.all([      
      ApiServices.postService.getPosts(debouncedSearch),
      
      // abort previous request if new request is made, latency improvement besides throttling
      { signal: controller.signal}
    ])
    .then(([{ data: posts}]) => {
      if(isMounted()){
        setPosts(posts);
      }
    })
    .catch(error => {
      console.log(error);    
    })
    .finally(() => {
      setLoading(false);
    });

    return () => {
      controller.abort();
    };
  },[debouncedSearch, isMounted])
  
  return (
  <>
    <div style={{margin:'10px'}}>
      <h1 style={{ color: '#333', fontFamily: 'Arial' }}>Posts</h1>
     <PostSearch 
        logMessage={consoleMessage}  
        onFiltersChange={postsSearch.handleFiltersChange}/>
    </div>    
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {isLoading ? <LoadingIndicator />:
      posts?.map((post) => (        
       <PostCard 
          key={post.id}  
          post={post} />
      ))}
    </div>
  </>
  );
};