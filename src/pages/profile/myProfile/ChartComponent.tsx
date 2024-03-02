import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux'; // Assuming you're using Redux
import { Chart, RadarController, LineElement, PointElement, Tooltip, Title, CategoryScale, RadialLinearScale } from 'chart.js';

Chart.register(RadarController, LineElement, PointElement, Tooltip, Title, CategoryScale, RadialLinearScale);

const ChartComponent: React.FC = () => {
  const [chartData, setChartData] = useState<Record<string, number>>({});
  const user = useSelector((state: any) => state.auth.user); // Assuming you have a user object in Redux
  const chartRef = useRef<Chart | null>(null);

  const colors = [
    '#eec272',
    '#e288b6',
    '#d77e6f',
    '#b38f6a',
    '#6667ab',
    '#d75078',
    '#217925',
    '#85a0a9'
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6280/api/Surveys/surveyansweraverages', {
          params: {
            userId: user.id,
            surveyId: 1,
          },
        });
        const surveyAnswerAverages = Object.entries(response.data);
        const newData: Record<string, number> = {};
        surveyAnswerAverages.forEach(([key, value]) => {
          newData[key] = Number(value);
        });

        setChartData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('surveyChart') as HTMLCanvasElement;
    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the previous chart
      }
      const data = {
        labels: Object.keys(chartData),
        datasets: [{
          data: Object.values(chartData),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          pointBackgroundColor: colors,
          borderWidth: 0.5,
          pointRadius: 5,
          pointHoverRadius: 8,
          fill: true
        }],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            pointLabels: {
              display: false
            },
            grid: {
              circular: true,
              color: 'rgba(0, 0, 0, 0.2)',
            },
            ticks: {
              display: false,
              stepSize: 0.4,
            },
          },
        },

      };

      chartRef.current = new Chart(ctx, {
        type: 'radar',
        data,
        options,
      });
    }
  }, [chartData]);

  return (

    <div className='row'>
      <div className='col-12'>
        <div className="text-center mobile-d-block">
          <div className="row">
            <div className="col-md-7 col-12 my-3">
              <div className="chartjs-size-monitor">
              </div>
              <canvas
                id="surveyChart"
                className="chartjs-render-monitor"
                height="300"
                style={{
                  display: 'block',
                  height: '240px',
                  width: '612px',
                }}
                width="765"
              />
            </div>
            <div className="col-md-5 col-12 d-flex my-3">
              <div className="radar-labels">
                {Object.keys(chartData).map((key, index) => (
                  <div key={index} className="label">
                    <span className={`legend legend${index + 1}`} style={{ backgroundColor: colors[index] }}>{Number(chartData[key])}</span>
                    <span className="legendName">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartComponent;
