import React from 'react';
import useFetch from './UseFetch';

const DataFetchingComponent: React.FC = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data && data.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default DataFetchingComponent;
