import { ApplicationRoute } from "./types/application-route";
import { HomePage } from './pages/Home/Home';

export const paths: ApplicationRoute[] = [{
  id:'home',  
  path: '/',
  element: HomePage,  
}];

// export const outOfLayoutPaths = [
//   {
//     id:'login',
//     path: '/login',
//     component: Login,
//     exact: true
//   }
// ];

export const routes = {
  index: '/',
  posts: '/posts',
  postDetails: '/posts/:postId',
}