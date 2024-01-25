import React from 'react';

const SearchSection: React.FC = () => {
  return (
    <div className="search-section container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-12 search-container">
            <div className="education-count">
              <span>Öğrenmeye başla !</span>
            </div>
            <div className="search-box">
              <input className="w-100" type="text" id="search" placeholder="Eğitim arayın..." />
              <button>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end' }}>
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z"
                      stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                    <path d="M28.8758 28.8748L22.8945 22.8936" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28.8758 28.8748L22.8945 22.8936" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
