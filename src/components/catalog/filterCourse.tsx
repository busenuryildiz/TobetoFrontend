import React, { useState } from 'react';
import { Course } from './courses';
import { PRICE_OPTIONS, EDUCATION_OPTIONS, COURSE_LEVEL_OPTIONS, SUBJECT_OPTIONS, INSTRUCTOR_OPTIONS, STATUS_OPTIONS, SOFTWARE_LANGUAGE_OPTIONS } from './constants'; 
import FilterOption from './filterOption';

interface FilterCourseProps {
  courses: Course[];
  onFilterChange: (filteredCourses: Course[]) => void;
  theme: 'light' | 'dark';
}

const FilterCourse: React.FC<FilterCourseProps> = ({ courses, onFilterChange, theme }) => {
  const [filters, setFilters] = useState<{ [key: string]: string | null }>({
    Kategori: null,
    Eğitimler: null,
    Seviye: null,
    Konu: null,
    'Yazılım Dili': null,
    Eğitmen: null,
    Durum: null
  });

  const handleFilterChange = (filterType: string, selectedOption: string) => {
    const updatedFilters = { ...filters, [filterType]: selectedOption  === 'Ücretsiz Eğitimler' ? '0' : selectedOption };
    setFilters(updatedFilters);

    const filteredCourses = courses.filter(course => {
      return Object.keys(updatedFilters).every(filterType => {
        const filterValue = updatedFilters[filterType];
        if (filterValue&& filterValue.startsWith('Tüm')) {
          return true;
        }else if (filterValue) {
          switch (filterType) {
            case 'Kategori':
              return course.price === Number(filterValue);
            case 'Eğitimler':
              return course.categoryName === filterValue;
            case 'Seviye':
              return course.courseLevelName === filterValue;
            case 'Konu':
              return course.courseSubjectName === filterValue;
            case 'Yazılım Dili':
              return course.softwareLanguageName === filterValue;
            case 'Eğitmen':
              return course.instructorName === filterValue;
            case 'Durum':
              return course.status === filterValue;
            default:
              return true;
          }
        }
        return true;
      });
    });

    onFilterChange(filteredCourses);
  };


  return (
    <div className={`col-lg-3 col-md-4 col-12 ${theme}`}>
      <div className="filter dm-none">
        <h2>Filtrele</h2>
        <hr className="mt-0" />
        {theme === 'light' && (
          <button
            className="mb-3 w-100"
            style={{
              backgroundColor: 'white',
              border: '2px solid rgb(153, 51, 255)',
              borderRadius: '50px',
              color: 'rgb(24, 24, 24)',
              fontWeight: '600',
              padding: '8px 16px',
              textAlign: 'left'
            }}
            type="button"
          >
            <div className=" w-100">
              <span>Bana Özel</span>
            </div>
          </button>
        )}
        <FilterOption options={PRICE_OPTIONS} filterOption={(option) => handleFilterChange('Kategori', option)} filterType="Kategori" />
        <FilterOption options={EDUCATION_OPTIONS} filterOption={(option) => handleFilterChange('Eğitimler', option)} filterType="Eğitimler" />
        <FilterOption options={COURSE_LEVEL_OPTIONS} filterOption={(option) => handleFilterChange('Seviye', option)} filterType="Seviye" />
        <FilterOption options={SUBJECT_OPTIONS} filterOption={(option) => handleFilterChange('Konu', option)} filterType="Konu" />
        <FilterOption options={SOFTWARE_LANGUAGE_OPTIONS} filterOption={(option) => handleFilterChange('Yazılım Dili', option)} filterType="Yazılım Dili" />
        <FilterOption options={INSTRUCTOR_OPTIONS} filterOption={(option) => handleFilterChange('Eğitmen', option)} filterType="Eğitmen" />
        <FilterOption options={STATUS_OPTIONS} filterOption={(option) => handleFilterChange('Durum', option)} filterType="Durum" />
      </div>
    </div>
  );
};

export default FilterCourse;
