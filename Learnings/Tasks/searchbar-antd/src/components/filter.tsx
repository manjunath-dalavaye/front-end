import React, { useState } from "react";
// import './App.css';
import Searched from "./searchbar";
import TableComponent from "./table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const initialData: DataType[] = [
  {
    key: "1",
    name: "Chutki",
    age: 22,
    address: "bengaluru",
  },
  {
    key: "2",
    name: "Manjunath",
    age: 22,
    address: "dvg",
  },
  {
    key: "3",
    name: "Bheem",
    age: 25,
    address: "Dolakhpur",
  },
  {
    key: "4",
    name: "Jaggu",
    age: 12,
    address: "Forest",
  },
];

const Pap: React.FC = () => {
  const [filteredData, setFilteredData] = useState(initialData);
  //first pass the intial data
     const handleSearch = (searchText: string) => {
     const lowercasedFilter = searchText.toLowerCase();
     const filteredArray = initialData.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key as keyof DataType])
          .toLowerCase()
          .includes(lowercasedFilter)
      )
    );
    setFilteredData(filteredArray);
  };

  return (
    <>
      <div>
      <Searched onSearch={handleSearch} />
      </div>
      <div>
      <TableComponent data={filteredData} />
      </div>
    </>
  );
};

export default Pap;
