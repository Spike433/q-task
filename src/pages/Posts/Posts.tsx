import React from 'react';
import { PostCard } from 'src/components/posts/post-card';
import { ApiServices } from 'src/services';
import { Post } from 'src/services/types';

export function PostsPage(){
  const [search, setSearch] = React.useState('');
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    Promise.all([
      //setLoading(true),
      ApiServices.postService.getPosts(),
    ])
    .then(([{data: posts}]) => {
      setPosts(posts);
    })
    .catch(error => {
      console.log(error);    
    })
    .finally(() => {
      //setLoading(false);
    });
  },[])
  
  return (
  <div>    
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
      {posts.map((post) => (        
       <PostCard 
          key={post.id}  
          post={post} />
      ))}
    </div>
  </div>
  );
};