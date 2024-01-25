// Catalog component
import React, { useState } from 'react';
import Navi from '../../components/navbar/Navi';
import SearchSection from '../../components/catalog/searchSection';
import FilterCourse from '../../components/catalog/filterCourse';
import Courses from '../../components/catalog/courses';

export default function Catalog() {
  const [filteredData, setFilteredData] = useState<Array<any>>([]);

  const handleFilterComplete = (filteredData: Array<any>) => {
    setFilteredData(filteredData);
  };

  return (
    <div>
      <Navi />
      <SearchSection />
      <div className="container mt-5 pb-20">
        <div className="row">
          <FilterCourse onFilterComplete={handleFilterComplete} />
          <Courses />
        </div>
      </div>
    </div>
  );
}
