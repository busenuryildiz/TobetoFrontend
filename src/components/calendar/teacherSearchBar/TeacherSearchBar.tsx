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
    <div className="teacher-search-bar" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Öğretmen Ara..."
        onClick={() => setIsOpen(!isOpen)} // Inputa tıklandığında dropdown menüyü aç
        onKeyDown={handleKeyPress}
      />
       {isOpen && (
      <div className="teacher-dropdown">
        {filteredTeachers.map((teacher, index) => (
          <div key={index} onClick={() => handleTeacherClick(teacher)}>
            {teacher}
          </div>
        ))}
      </div>
       )};
    </div>
  );
};

export default TeacherSearchBar;
