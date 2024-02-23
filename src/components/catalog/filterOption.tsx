import React, { useState } from 'react';
import { SVG_PATH } from './constants';

interface FilterOptionProps {
  options: string[];
  filterOption: (selectedOption: string) => void;
  filterType: string;
}

const FilterOption: React.FC<FilterOptionProps> = ({ options, filterOption, filterType }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterOptions = (option: string) => {
    return option.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, option: string) => {
    filterOption(option);
  };

  const collapseId = `${filterType.replace(/\s+/g, '')}Collapse`;

  return (
    <div className="accordion">
      <div className="accordion-item filter-accordion">
        <h2 className="accordion-header" id={`${collapseId}-heading`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded="false"
            aria-controls={collapseId}
          >
            <div className="title w-100">
              <span>{filterType}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={SVG_PATH} stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </h2>
        <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`${collapseId}-heading`} data-bs-parent="#accordionExample">
          <div className="accordion-body filter-accordion-body">
            <input
              className="form-control mt-3 mb-3"
              placeholder="Arama"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {options.filter(filterOptions).map((option, index) => (
                <div key={option} className="form-check">
                    <div style={{ paddingLeft: '5px', color: '#828282', fontWeight: 400, fontSize: '15px', lineHeight: '21px' }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`${filterType.toLowerCase()}Option`}
                        id={`${filterType.toLowerCase()}Option${index}`}
                        value={option}
                        defaultChecked={option === "Tüm Eğitimler"}
                        onChange={(e) => handleFilterChange(e, option)}
                      />
                      <label className="form-check-label" htmlFor={`${filterType.toLowerCase()}Option${index}`}>
                        {option}
                      </label>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
