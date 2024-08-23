import React from 'react';
import useTable from './Uasge';

interface Row {
  id: number;
  name: string;
  age: number;
}

const MyTable: React.FC<{ initialData: Row[] }> = ({ initialData }) => {
  const { data, sort, sortField, sortOrder } = useTable(initialData);

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th 
            onClick={() => sort('name')} 
            style={{ 
              border: '1px solid black', 
              padding: '8px',
              cursor: 'pointer',
              backgroundColor: '#f4f4f4'
            }}
          >
            Name {sortField === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </th>
          <th 
            onClick={() => sort('age')} 
            style={{ 
              border: '1px solid black', 
              padding: '8px',
              cursor: 'pointer',
              backgroundColor: '#f4f4f4'
            }}
          >
            Age {sortField === 'age' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.name}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
