export interface Post {
    id: number;
    title: string;
    description: string;
    author: string;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    text: string;
    nickname: string;
  }