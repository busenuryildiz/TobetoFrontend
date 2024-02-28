import React from 'react';

const FilterSection = () => {
  return (
    <div className="filter-section mt-3">
      <div className="row">
        <div className="col-md-5 col-12 mb-4">
          <div className="searchBox search-box ">
            <input className="w-100" type="text" id="search" placeholder="Arama" value="" />
            <button>
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end' }}>
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.125 26.125C21.2001 26.125 26.125 21.2001 26.125 15.125C26.125 9.04987 21.2001 4.125 15.125 4.125C9.04987 4.125 4.125 9.04987 4.125 15.125C4.125 21.2001 9.04987 26.125 15.125 26.125Z" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M28.8758 28.8748L22.8945 22.8936" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M28.8758 28.8748L22.8945 22.8936" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <div className="css-b62m3t-container">
            <span id="react-select-11-live-region" className="css-7pg0cj-a11yText"></span>
            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
            <div className="select__control css-13cymwt-control">
              {/* Diğer içerikler */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <div className="css-b62m3t-container">
            <span id="react-select-12-live-region" className="css-7pg0cj-a11yText"></span>
            <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
            <div className="select__control css-13cymwt-control">
              {/* Diğer içerikler */}
            </div>
          </div>
        </div>
        <div className="col-md-1 col-12 mb-4 d-flex justify-content-end"></div>
      </div>
    </div>
  );
}

export default FilterSection;
