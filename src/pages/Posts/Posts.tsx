import React from 'react';
import { PostCard } from 'src/components/posts/post-card';
import { ApiServices } from 'src/services';
import { Post } from 'src/services/types';

export function PostsPage(){
  const [search, setSearch] = React.useState('');
  const [posts, setPosts] = React.useState<Post[]>();
  const [loading, setLoading] = React.useState(false);

  console.log('renders');

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    Promise.all([      
      ApiServices.postService.getPosts(search),
      
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
  },[search])
  
  return (
  <>   
    <div style={{margin:'10px'}}>
      <h1 style={{ color: '#333', fontFamily: 'Arial' }}>Posts</h1>
      <input
        type="text"
        placeholder='Search Authors In Posts...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '10px', borderRadius:'5px', width:'250px'}}
      />
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