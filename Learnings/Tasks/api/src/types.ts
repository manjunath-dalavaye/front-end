// src/types.ts

export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export interface AppState {
    loading: boolean;
    data: Post[];
    error: string | null;
  }
  