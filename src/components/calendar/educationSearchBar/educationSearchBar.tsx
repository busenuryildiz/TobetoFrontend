import React, { useState, useEffect, useRef } from 'react';
type EducationSearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

function EducationSearchBar({ onSearch }: EducationSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  useEffect(() => {
    // inputRef.current burada null olmamalıdır, çünkü bu kod useEffect içinde çalıştığında komponent render edilmiş olmalıdır.
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='d-flex flex-column'>
      <div className='filter-header mb-2'>
        <span>Eğitim Arama</span>
      </div>
      <input
        id='search-event'
        className='cal-filter-input'
        placeholder='Eğitim arayın...'
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch();
        }}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default EducationSearchBar;
