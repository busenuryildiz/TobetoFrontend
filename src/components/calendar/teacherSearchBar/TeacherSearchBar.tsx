import React, { useState, useEffect, useRef } from 'react';
import './TeacherSearchBar.css';

type TeacherSearchBarProps = {
  teachers: string[]; 
  onTeacherSelect: (teacher: string) => void; 
  onSearch: (searchTerm: string) => void; 
};

const TeacherSearchBar = ({ teachers, onTeacherSelect, onSearch }:TeacherSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    console.log("Search Term:", searchTerm);
    setSearchTerm(searchTerm);
    setIsOpen(true);
  };
  

  const handleTeacherClick = (teacher: string) => {
    onTeacherSelect(teacher);
    setIsOpen(false); // Öğretmen seçildiğinde dropdown menüyü kapat
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as any)) {
      setIsOpen(false); 
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 const filteredTeachers = teachers.filter((teacher) =>
    teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className='d-flex flex-column'>
      <div className='filter-header mb-2'>
        <span>Eğitmen</span>
      </div>
      <div className="calender-select css-b62m3t-container" ref={dropdownRef}>
        <span id="react-select-3-live-region" className="css-7pg0cj-a11yText"></span>
        <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
        <div className=" css-14cgata-control" >
          <div className=" css-hlgwow">
            <div className=' css-19bb58m'>
            <input
                id='react-select-3-input'
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                className="react-select-input"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                tabIndex={0}
                aria-autocomplete="list"
                aria-haspopup="true"
                role="combobox"
                aria-describedby="react-select-3-placeholder"
                aria-controls={isOpen ? "dropdown-menu" : undefined} 
                aria-expanded={isOpen} 
                aria-owns={isOpen ? "react-select-3-listbox": undefined}
                onFocus={() => setIsOpen(true)}
              />
              {isOpen && (
                <div className="teacher-dropdown">
                  {filteredTeachers.map((teacher, index) => (
                    <div key={index} onClick={() => handleTeacherClick(teacher)}>
                      {teacher}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default TeacherSearchBar;