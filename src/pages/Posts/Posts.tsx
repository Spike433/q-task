import React  from 'react';
import LoadingIndicator, {  } from 'src/components/core/loading-indicator/loading';
import { PostCard } from 'src/components/posts/post-card';
import { PostSearch } from 'src/components/posts/post-search';
//import useDebounce from 'src/hooks/use-debounce';
//import { usePostSearch } from 'src/hooks/use-search-params';
import { ApiServices } from 'src/services';
import { Filters, Post } from 'src/services/types';

const useDebounce = (value:string | undefined, delay = 500) =>
{
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    
    React.useEffect(() => {
        const handler = setTimeout(() => {
        setDebouncedValue(value);
        }, delay);
    
        return () => {
        clearTimeout(handler);
        };
    }, [value, delay]);
    
    return debouncedValue;
}

const usePostSearch = () => {  
  const queryRef = React.useRef('');

  const handleFiltersChange = React.useCallback((query: string): void => {
    queryRef.current = query;
  },[]);

  return {
    queryRef,
    handleFiltersChange
  }
};

export function PostsPage(){  
  const postsSearch = usePostSearch();  
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setLoading] = React.useState(false);

  const searchRef = React.useRef('');
  const debouncedSearch = useDebounce(searchRef.current, 250);
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
      <input
                type="text"
                placeholder='Search Authors In Posts...'
                onChange={(e) => { searchRef.current = e.target.value }}
                style={{ padding: '10px', borderRadius:'5px', width:'250px'}}
            />
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