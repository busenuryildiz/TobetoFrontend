import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Artık bu şekilde içe aktarabilirsiniz

const ChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) { // ctx null değilse devam et
        const data = {
          labels: ['A', 'B', 'C', 'D', 'E'],
          datasets: [{
            label: 'Veri',
            data: [4.6, 4.2, 4.4, 3.9, 4.5, 4.2, 4.4, 4.1],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        };

        new Chart(ctx, {
          type: 'radar',
          data: data,
          options: {
            scales: {
              r: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} height="240" width="334" className="chartjs-render-monitor"></canvas>
    </div>
  );
};

export default ChartComponent;
