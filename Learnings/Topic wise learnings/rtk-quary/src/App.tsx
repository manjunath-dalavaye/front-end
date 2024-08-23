import './App.css';
import { useGetAllPostQuery } from './services/post';

const App: React.FC = () => {
  // Correct destructuring
  const { data, error, isLoading } = useGetAllPostQuery();

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="App">
      <h1>Redux App</h1>
      {/* Render the data */}
        {data && data.map((post: any) => (
          <div>
            <key={post.id}>
            <h2>{post.id}{post.title}</h2>
            <p>{post.body}</p>
            </div>
        ))}
    </div>
  );
};

export default App;




//First we need to create a  API service
//second Add the service to store
//Third wrap the store in side the provider
//<Provider store={store}>
{/* <App />
</Provider>  */}
//4th wrap up the useGetAllPostQuery hook in app.tsx
//already defined hook- In post.ts
//console the error