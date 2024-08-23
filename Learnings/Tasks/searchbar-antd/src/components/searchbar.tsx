import React, { useState } from 'react';
import { Input } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.css'

interface SearchedProps {
  onSearch: (value: string) => void;
}

const Searched: React.FC<SearchedProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value: string) => {
    setSearchText(value);
    onSearch(value);
  };

  return (
    <div className='Search'>
      <Input.Search
      placeholder="Search in table" 
      allowClear
      enterButton="Search"
      size="large"
      value={searchText}
      onChange={(e) => handleSearch(e.target.value)}
      onSearch={handleSearch}
    />
    </div>
  );
};

export default Searched;
