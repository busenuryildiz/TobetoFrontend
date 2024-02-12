// import React, { useState, ChangeEvent } from 'react';

// interface Category {
//   value: string;
//   label: string;
// }

// interface CategoryFilterProps {
//   categories: Category[];
//   onChange: (value: string) => void;
// }

// const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onChange }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(e.target.value);
//     onChange(e.target.value);
//   };

//   return (
//     <div>
//       <label>Kategori:</label>
//       <select value={selectedCategory} onChange={handleCategoryChange}>
//         <option value="">Tümü</option>
//         {categories.map((category) => (
//           <option key={category.value} value={category.value}>
//             {category.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// interface FilterCourseProps {
//   onApplyFilters: (filters: { category: string }) => void;
// }

// const FilterCourse: React.FC<FilterCourseProps> = ({ onApplyFilters }) => {
//   const [selectedFilters, setSelectedFilters] = useState({
//     category: '',
//     // Diğer filtreler burada eklenebilir
//   });

//   const handleFilterChange = (filterName: string, value: string) => {
//     setSelectedFilters({ ...selectedFilters, [filterName]: value });
//   };

//   const applyFilters = () => {
//     onApplyFilters(selectedFilters);
//   };

//   return (
//     <div className="col-md-4">
//       <div className="card">
//         <div className="card-body">
//           <h2>Filtrele</h2>
//           <CategoryFilter
//             categories={[
//               { value: '1', label: 'Ücretli Eğitimler' },
//               { value: '0', label: 'Ücretsiz Eğitimler' },
//             ]}
//             onChange={(value) => handleFilterChange('category', value)}
//           />
//           <button className="btn btn-primary mt-3" onClick={applyFilters}>Filtrele</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterCourse;