import React from 'react';
import styled from 'styled-components';

interface Comment {
  id: number;
  text: string;
  nickname: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  comments: Comment[];
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Building a Skyscraper',
    description: 'This post discusses the process and challenges of constructing a modern skyscraper. From the initial design phase to the final construction, each step presents unique challenges that architects and engineers must overcome.',
    author: 'Architect',
    comments: [
     // { id: 1, text: 'Very informative, thanks!', nickname: 'SkyHigh' },
      { id: 2, text: 'I always wondered how skyscrapers were built.', nickname: 'GroundLevel' },
    ],
  },
  {
    id: 2,
    title: 'IT Infrastructure Modernization',
    description: 'IT infrastructure modernization is crucial for businesses to stay competitive. This post explores some of the most common strategies and techniques, including cloud migration, serverless computing, and the use of AI and machine learning.',
    author: 'Tech Guru',
    comments: [
      { id: 1, text: 'Modernization is key in today\'s fast-paced tech world.', nickname: 'CloudChaser' },
      { id: 2, text: 'I\'d love to see more about cloud migration strategies.', nickname: 'DataMover' },
    ],
  },
  {
    id: 3,
    title: 'The Beauty of Nature',
    description: 'Nature is full of wonders. This post explores the beauty and importance of preserving our natural environment. We delve into various ecosystems, the flora and fauna they support, and the steps we can take to protect them.',
    author: 'Nature Enthusiast',
    comments: [
      { id: 1, text: 'Nature is indeed beautiful.', nickname: 'GreenThumb' },
      { id: 2, text: 'We should all do our part to preserve it.', nickname: 'EcoWarrior' },
    ],
  },
  {
    id: 4,
    title: 'The Sweet World of Strawberries',
    description: 'This post explores the delightful world of strawberries, their nutritional benefits, and how they are grown. We discuss everything from the planting process to the harvest, and even share some delicious strawberry-based recipes.',
    author: 'Food Enthusiast',
    comments: [
      { id: 1, text: 'I love strawberries! They\'re so sweet and juicy.', nickname: 'BerryLover' },
      { id: 2, text: 'It\'s interesting to learn about how they are grown.', nickname: 'FarmFresh' },
    ],
  },
  {
    id: 5,
    title: 'The Importance of Exercise',
    description: 'Exercise is crucial for maintaining a healthy lifestyle. This post explores the benefits of regular physical activity, including improved cardiovascular health, increased strength and flexibility, and better mental health. We also provide tips for incorporating exercise into your daily routine.',
    author: 'Fitness Trainer',
    comments: [
      { id: 1, text: 'I can\'t imagine my life without exercise.', nickname: 'GymRat' },
      { id: 2, text: 'Different types of workouts.', nickname: 'FitLife' },
    ],
  },
];

const PostContainer = styled.div`
  padding: 5px;
  background-color: #f5f2f2b7;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

export function PostsPage(){
  const [search, setSearch] = React.useState('');  
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([]);

  
  React.useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.author.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

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
      {filteredPosts.map((post) => (        
        <div 
          key={post.id} 
          style={{ 
            border: '3px solid #ccc', 
            padding: '20px', 
            margin: '10px', 
            flex: '1 0 46%', 
            boxSizing: 'border-box',
            backgroundColor: '#f5f2f2b7',
            borderRadius: '5px'
          }}
        >
          <PostContainer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
            <h2 style={{ color: '#333', fontFamily: 'Arial' }}>{post.title}</h2>
            <img 
              style={{ margin: '5px' }}
              src={`https://picsum.photos/seed/${post.id}/70`} 
              alt="Post"           
            />
          </div>
          </PostContainer>
          <hr/>
          <p style={{ color: '#666', fontFamily: 'Arial' }}>{post.description}</p>
          <h4>
            <span style={{ display: 'block', textAlign: 'right', fontStyle:'italic', color: '#817f7f', fontFamily: 'Arial' }}>{post.author}</span>
          </h4>
          <h3 style={{ color: '#666', fontFamily: 'Arial' }}>Comments</h3>
          
          {post.comments.map((comment) => (
            <div key={comment.id}  
              style={{ margin:'10px', paddingLeft:'10px',paddingBottom:'10px', paddingRight:'10px', border: '2px solid #ccc', backgroundColor: '#f3f1f1', borderRadius: '5px' }}>
              <p style={{ color: '#666', fontFamily: 'Arial' }}>{comment.text}</p>            
              <span style={{  display: 'block', textAlign: 'right', color: '#8f8b8b', fontFamily: 'Arial' }}>{comment.nickname}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};