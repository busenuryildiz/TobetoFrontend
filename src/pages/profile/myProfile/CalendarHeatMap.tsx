import React, { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import UserAssignmentsAndDatesResponse from './UserAssignmentsAndDatesResponse';

const CalendarHeatmapComponent = ({ assignmentData }: { assignmentData: UserAssignmentsAndDatesResponse[] }) => {
  const today = new Date();
  const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
  const [hoveredValue, setHoveredValue] = useState<any>(null);

  if (!assignmentData || assignmentData.length === 0) {
    return <div>No assignment data available.</div>;
  }

  const heatmapData = assignmentData.reduce((accumulator, currentValue) => {
    // Ensure assignmentAddDate is a Date object
    const assignmentDate = new Date(currentValue.assignmentAddDate);
    if (isNaN(assignmentDate.getTime())) {
      // If assignmentAddDate is not a valid Date object, skip it
      return accumulator;
    }
    const dateKey = assignmentDate.toISOString().slice(0, 10);
    if (accumulator[dateKey]) {
      accumulator[dateKey]++;
    } else {
      accumulator[dateKey] = 1;
    }
    return accumulator;
  }, {} as { [date: string]: number });

  const values = Object.keys(heatmapData).map(date => ({
    date: new Date(date),
    count: heatmapData[date]
  }));

  return (
    <div className='col-12'>
      <div className="cv-box cv-padding">
      <div className="cv-box-header"><span>Aktivite Haritam</span><hr/></div>
      {/* Takvim */}
      <CalendarHeatmap
        startDate={oneMonthAgo}
        endDate={new Date(today.getFullYear(), today.getMonth() + 6, today.getDate())} // 6 ay sonrası
        values={values}
        classForValue={(value) => {
          const count = value ? value.count : 0;
          if (count === 0) {
            return 'color-github-1'; 
          } else if (count >= 6) {
            return 'color-github-4'; 
          } else if (count >= 3) {
            return 'color-github-3'; 
          } else {
            return 'color-github-2';
          }
        }}
        onMouseOver={(event, value) => setHoveredValue(value)}
        onMouseLeave={() => setHoveredValue(null)}
      />
      {hoveredValue && (
        <div style={{ position: 'absolute', top: hoveredValue.y, left: hoveredValue.x, background: 'rgba(0, 0, 0, 0.5)', padding: '5px', color: '#fff' }}>
          <div>Tarih: {hoveredValue.date.toISOString().slice(0, 10)}</div>
          <div>Aktivite Sayısı: {hoveredValue.count}</div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CalendarHeatmapComponent;
