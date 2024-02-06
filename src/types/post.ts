export interface Post {
    id: number;
    title: string;
    description: string;
    author: string;
    comments: Comment[];
  }
  
  interface Comment {
    id: number;
    text: string;
    nickname: string;
  }