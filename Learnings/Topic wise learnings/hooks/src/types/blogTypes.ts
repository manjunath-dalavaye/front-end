// src/types/blogTypes.ts
export interface Post {
    id: number;
    title: string;
  }
  
  export interface BlogState {
    posts: Post[];
    loading: boolean;
    error: string | null;
  }
  
  export type BlogAction =
    | { type: 'FETCH_START' }
    | { type: 'FETCH_SUCCESS'; payload: Post[] }
    | { type: 'FETCH_FAILURE'; payload: string };
  