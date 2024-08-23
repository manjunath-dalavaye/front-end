import React from 'react';
import SearchBar from './component/search';
 
const App: React.FC = () => {
  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm);
    // Perform search logic here
  };
 
  return (
    <div>
      <div className="heading">
      <h1>Search Bar</h1>
      </div>
      
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};
 
export default App;