import React, { useState } from 'react';
import { Course } from './courses';
import { PRICE_OPTIONS, EDUCATION_OPTIONS, COURSE_LEVEL_OPTIONS, SUBJECT_OPTIONS, INSTRUCTOR_OPTIONS, STATUS_OPTIONS, SOFTWARE_LANGUAGE_OPTIONS } from './constants'; 
import { handlePriceFilterChange, handleEducationFilterChange, handleCourseLevelFilterChange, handleSubjectFilterChange,handleSoftwareLanguageFilterChange, handleInstructorFilterChange, handleStatusFilterChange  } from './filter'; 
import FilterOption from './filterOption';

interface FilterCourseProps {
  courses: Course[];
  onFilterChange: (filteredCourses: Course[]) => void;
}

const FilterCourse: React.FC<FilterCourseProps> = ({ courses, onFilterChange }) => {
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [educationFilter, setEducationFilter] = useState<string | null>(null);
  const [courseLevelFilter, setCourseLevelFilter] = useState<string | null>(null);
  const [subjectFilter, setSubjectFilter] = useState<string | null>(null);
  const [softwareLanguageFilter, setSoftwareLanguageFilter] = useState<string | null>(null);
  const [instructorFilter, setInstructorFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null); 

  const handleFilterChange = (filterType: string, selectedOption: string) => {
    switch (filterType) {
      case 'Kategori':
        setPriceFilter(selectedOption);
        handlePriceFilterChange(selectedOption, courses, onFilterChange);
        break;
      case 'Eğitimler':
        setEducationFilter(selectedOption);
        handleEducationFilterChange(selectedOption, courses, onFilterChange);
        break;
      case 'Seviye':
        setCourseLevelFilter(selectedOption);
        handleCourseLevelFilterChange(selectedOption, courses, onFilterChange);
        break;
      case 'Konu':
        setSubjectFilter(selectedOption);
        handleSubjectFilterChange(selectedOption, courses, onFilterChange);
        break;
        case 'Yazılım Dili': 
          setSoftwareLanguageFilter(selectedOption);
          handleSoftwareLanguageFilterChange(selectedOption, courses, onFilterChange);
          break;
      case 'Eğitmen':
        setInstructorFilter(selectedOption);
        handleInstructorFilterChange(selectedOption, courses, onFilterChange);
        break;
      case 'Durum':
        setStatusFilter(selectedOption);
        handleStatusFilterChange(selectedOption, courses, onFilterChange);
        break;
      default:
        break;
    }
  };

  return (
    <div className="col-lg-3 col-md-4 col-12 light">
      <div className="filter dm-none">
        <h2>Filtrele</h2>
        <hr className="mt-0" />
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
          type="button" >
          <div className=" w-100">
            <span>
              Bana Özel
            </span>
          </div>
        </button>
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
