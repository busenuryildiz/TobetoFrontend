import { useState, useEffect } from "react";

function useFilter(data, filters) {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const applyFilters = () => {
      let filteredResult = data;
      filters.forEach((filterFunction) => {
        filteredResult = filteredResult.filter(filterFunction);
      });
      setFilteredData(filteredResult);
    };

    applyFilters();
  }, [data, filters]);

  return filteredData;
}

export default useFilter;


// KULLANIMI
// const [searchTerm, setSearchTerm] = useState('');
// const [isActive, setIsActive] = useState(true);

// const filteredUsers = useFilter(users, [
//   user => user.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   user => user.isActive === isActive
// ]);