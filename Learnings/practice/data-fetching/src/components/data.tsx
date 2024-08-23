import { useEffect, useRef, useState } from "react";

// Base URL for fetching data
const BASE_URL = "https://jsonplaceholder.typicode.com";

// Define the structure of a Post object
interface Post {
  id: number;
  title: string;<Q></Q>
}

export default function Demo() {
  // State to store any errors that occur during data fetching
  const [error, setError] = useState<Error | undefined>(undefined);
  
  // State to track whether the data is currently being loaded
  const [isLoading, setIsLoading] = useState(false);
  
  // State to store the fetched posts
  const [posts, setPosts] = useState<Post[]>([]);
  
  // State to manage the current page number
  const [page, setPage] = useState(0);

  // useRef to store the AbortController for canceling ongoing fetch requests
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Function to fetch posts based on the current page
    const fetchPosts = async () => {
        // Abort any ongoing fetch request before starting a new one
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        // Set the loading state to true as the fetch starts
        setIsLoading(true);

      try {
        // Fetch the posts from the API, passing the abort signal to allow cancellation
        const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
            signal: abortControllerRef.current?.signal,
        });

        // Parse the response as JSON and cast it to an array of Post objects
        const posts = (await response.json()) as Post[];
       
        // Update the state with the fetched posts
        setPosts(posts);

      } catch (e) {
        // Type check the error to ensure it's an Error object
        if (e instanceof Error) {
          // Check if the error is due to the fetch being aborted
          if (e.name === "AbortError") {
              console.log("Fetch aborted");
              return;
          }

          // If it's a different error, update the error state
          setError(e);
        }
      } finally {
        // Set loading state to false after the fetch is complete
        setIsLoading(false);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
  }, [page]); // Dependency array includes 'page' so the effect runs whenever 'page' changes

  // Render an error message if there's an error
  if (error) {
    return <div>Something went wrong..Try again</div>;
  }

  return (
    <div className="fetch">
      <h1 className="mb-4 text-2xl">Data fetching in React</h1>

      {/* Button to increment the page number, triggering a new fetch */}
      <button onClick={() => setPage(page + 1)}>Increase Page ({page})</button>

      {/* Display a loading message while data is being fetched */}
      {isLoading && <div>Loading... </div>}

      {/* Render the list of posts if data is loaded */}
      {!isLoading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
