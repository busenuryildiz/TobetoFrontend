// EducationStatus.tsx
import React, { useState } from 'react';
import './EducationStatus.css'; // Import the CSS file

interface EducationStatusProps {
  onFilter: (status: string) => void;
}

const EducationStatus: React.FC<EducationStatusProps> = ({ onFilter }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>(''); // Initial state, none selected

  const handleCheckboxChange = (status: string) => {
    setSelectedStatus(status);
    onFilter(status);
  };

  return (
    <div className="EducationStatusContainer">
      <label>
        <input
          type="checkbox"
          checked={selectedStatus === 'past'}
          onChange={() => handleCheckboxChange('past')}
        />
        Past Lessons
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedStatus === 'current'}
          onChange={() => handleCheckboxChange('current')}
        />
        Current Lessons
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedStatus === 'future'}
          onChange={() => handleCheckboxChange('future')}
        />
        Future Lessons
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange('purchased')}
        />
        Satın Alınmış Dersler
      </label>
    </div>
  );
};

export default EducationStatus;
