import { useState, useMemo } from 'react';

interface Data {
  id: number;
  name: string;
  age: number;
}

const useTable = (
  initialData: Data[],
  initialSortField: keyof Data = 'name',
  initialSortOrder: 'asc' | 'desc' = 'asc'
) => {
  const [data, setData] = useState<Data[]>(initialData);
  const [sortField, setSortField] = useState<keyof Data>(initialSortField);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder);

  const sortedData = useMemo(() => {
    // If no sort field is specified, return the data as is
    if (!sortField) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0; // Default return for unsupported types
    });
  }, [data, sortField, sortOrder]);

  const sort = (field: keyof Data) => {
    // Toggle sort order if the same field is clicked again, otherwise default to 'asc'
    if (sortField === field) {
      setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return { data: sortedData, sort, sortField, sortOrder };
};

export default useTable;
