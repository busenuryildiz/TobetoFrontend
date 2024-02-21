import React, { useState, useEffect, useRef } from 'react';
import './TeacherSearchBar.css';

type TeacherSearchBarProps = {
  teachers: string[]; // Öğretmenlerin listesi
  onTeacherSelect: (teacher: string) => void; // Öğretmen seçildiğinde tetiklenecek fonksiyon
  onSearch: (searchTerm: string) => void; // Arama işlemi başlatıldığında tetiklenecek fonksiyon
};

const TeacherSearchBar: React.FC<TeacherSearchBarProps> = ({ teachers, onTeacherSelect, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false); // Dropdown menüsünün açık/kapalı durumunu takip etmek için state

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTeacherClick = (teacher: string) => {
    onTeacherSelect(teacher);
    setIsOpen(false); // Öğretmen seçildiğinde dropdown menüyü kapat
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Dropdown menüsü dışında bir yere tıklandığında menüyü kapat
    }
  };

  // "Enter" tuşuna basıldığında arama işlemini gerçekleştiren fonksiyon
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

  // Öğretmen listesini filtreleme işlevi
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
            <div className=" css-1jqq78o-placeholder" id="react-select-3-placeholder">Eğitmen Seçiniz</div>
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
              />
              {isOpen && (
                <div className="teacher-dropdown dropdown-menu">
                  {filteredTeachers.map((teacher, index) => (
                    <div key={index} onClick={() => handleTeacherClick(teacher)}>
                      {teacher}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className=" css-1wy0on6">
            <span className=" css-1u9des2-indicatorSeparator" />
            <div
              aria-hidden="true"
              className=" css-1xc3v61-indicatorContainer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                aria-hidden="true"
                className="css-8mmkcg"
                focusable="false"
                height="20"
                viewBox="0 0 20 20"
                width="20"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default TeacherSearchBar;