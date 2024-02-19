// EducationStatus.tsx
import React, { useState } from 'react';
import '../calendar.css';
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
    <div className="d-flex flex-column">
      <div className="filter-header mb-2">
        <span>Eğitim Durumu</span>
      </div>
      <div className='edu-status-filter'  >
        <span>
          <input
            className="form-check-input me-2 checkEventEnded"
            value="eventEnded"
            name="eventEnded"
            type="checkbox"
            checked={selectedStatus === 'past'}
            onChange={() => handleCheckboxChange('past')}
          />
          Bitmiş Dersler
        </span>
        <span>
          <input
            className="form-check-input me-2 checkEventContinue"
            value="eventContinue"
            name="eventContinue"
            type="checkbox"
            checked={selectedStatus === 'current'}
            onChange={() => handleCheckboxChange('current')}
          />
          Devam Eden Dersler
        </span>
        <span>
          <input
            className="form-check-input me-2 checkEventBuyed"
            type="checkbox"
            name="eventBuyed"
            value="eventBuyed"
            checked={selectedStatus === 'purchased'}
            onChange={() => handleCheckboxChange('purchased')} />
          Satın Alınmış Dersler
        </span>
        <span>
          <input
            className="form-check-input me-2 checkEventNotStarted"
            type="checkbox"
            name="eventNotStarted"
            value="eventNotStarted"
            checked={selectedStatus === 'future'}
            onChange={() => handleCheckboxChange('future')} />
          Başlamamış Dersler
        </span>
      </div>
    </div>
  );
};

export default EducationStatus;
