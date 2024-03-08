import React, { useState, useEffect } from 'react';
import Courses, { Course } from '../../components/catalog/courses';
import SearchSection from '../../components/catalog/searchSection';
import FilterCourse from '../../components/catalog/filterCourse';
import Navbar from '../../components/navbar/Navi2';
import Footer2 from '../../components/footer/Footer2';
import { BASE_API_URL } from '../../enviroment/enviroment';

export default function Catalog() {
  const [filteredData, setFilteredData] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}Courses/GetList?PageSize=1000`);
        const data = await response.json();
        setAllCourses(data.items);
        setFilteredData(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    const results = allCourses.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
    setCurrentPage(1); 
  };

  const handleFilterChange = (filteredCourses: Course[]) => {
    setFilteredData(filteredCourses);
    setCurrentPage(1); 
  };

  return (
    <div className="bg-front-dark">
      <Navbar />
      <div style={{ marginTop: '20px', paddingTop: '80px' }}>
        <SearchSection onSearch={handleSearch} />
        <div className="container mt-5 pb-20">
          <div className="row">
            <FilterCourse theme="dark" courses={allCourses} onFilterChange={handleFilterChange} />
            <Courses courses={filteredData} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}
