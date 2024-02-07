import React, { useCallback } from 'react';
import { PostCard } from 'src/components/posts/post-card';
import { PostSearch } from 'src/components/posts/post-search';
import useDebounce from 'src/hooks/use-debounce';
import { usePostSearch } from 'src/hooks/use-search-params';
import { ApiServices } from 'src/services';
import { Post } from 'src/services/types';

export function PostsPage(){  
  const postsSearch = usePostSearch();  
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(false);

  const debouncedSearch = useDebounce(postsSearch.state.query, 250);
  console.log('renders');

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    Promise.all([      
      ApiServices.postService.getPosts(debouncedSearch),
      
      // abort previous request if new request is made, latency improvement besides throttling
      { signal: controller.signal}
    ])
    .then(([{ data: posts}]) => {
      setPosts(posts);
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
  },[debouncedSearch])
  
  return (
  <>   
    <div style={{margin:'10px'}}>
      <h1 style={{ color: '#333', fontFamily: 'Arial' }}>Posts</h1>
     <PostSearch onFiltersChange={postsSearch.handleFiltersChange}/>
    </div>    
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {loading ? <h1 style={{margin:'10px'}}>Loading...</h1> :
      posts?.map((post) => (        
       <PostCard 
          key={post.id}  
          post={post} />
      ))}
    </div>
  </>
  );
};