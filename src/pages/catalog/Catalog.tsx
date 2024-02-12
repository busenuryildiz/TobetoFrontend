import React, { useState, useEffect } from 'react';
import Courses, { Course } from '../../components/catalog/courses';
import SearchSection from '../../components/catalog/searchSection';
import Navi from '../../components/navbar/Navi';
import FilterCourse from '../../components/catalog/filterCourse2';

export default function Catalog() {
    const [filteredData, setFilteredData] = useState<Course[]>([]);
    const [allCourses, setAllCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:6280/api/Courses/GetList?PageSize=20');
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
        if (!searchTerm) {
            setFilteredData(allCourses);
            return;
        }

        const results = allCourses.filter((course) =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log('Search results:', results);
        setFilteredData(results);
    };

    useEffect(() => {
        console.log('filteredData state updated:', filteredData);
    }, [filteredData]);

    return (
        <div>
            <Navi />
            <SearchSection onSearch={handleSearch} />
            <div className="container mt-5 pb-20">
                <div className="row">
                    <FilterCourse
                        onFilterComplete={(filteredData) => {
                            // Handle the filtered data here
                            console.log(filteredData);
                        }}
                        course={allCourses}
                    />
                    <Courses courses={filteredData} />
                </div>
            </div>
        </div>
    );
}
