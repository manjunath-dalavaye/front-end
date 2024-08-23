// src/hooks/useFetchPosts.ts
import { useReducer, useEffect } from 'react';
import { BlogState, BlogAction, Post } from '../types/blogTypes';

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null
};

const reducer = (state: BlogState, action: BlogAction): BlogState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, posts: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const useFetchPosts = (url: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer 4886631d15334441a9748ca966f05be2',
            'Content-Type': 'application/json',
          },
        });

        // Check if response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }

        // Parse the JSON data
        const data: Post[] = await response.json();

        // Check if the data is valid
        if (!Array.isArray(data)) {
          throw new Error('Data format is invalid');
        }

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        console.error('Fetch error:', error); // Log detailed error
        dispatch({ type: 'FETCH_FAILURE', payload: (error as Error).message });
      }
    };

    fetchPosts();
  }, [url]);

  return state;
};

export default useFetchPosts;
