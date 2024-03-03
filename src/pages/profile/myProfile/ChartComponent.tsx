import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart, RadarController, LineElement, PointElement, Tooltip, Title, CategoryScale, RadialLinearScale, Filler } from 'chart.js';
import { fetchData } from '../../../store/slices/chartDataSlice';
import { AppDispatch, RootState } from '../../../store';
import { PayloadAction, SerializedError } from '@reduxjs/toolkit';

Chart.register(RadarController, LineElement, PointElement, Tooltip, Title, CategoryScale, RadialLinearScale, Filler);

const ChartComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const [chartData, setChartData] = useState<Record<string, number>>({});


  const chartRef = useRef<Chart | null>(null);
  const colors = useMemo(() => [
    '#eec272',
    '#e288b6',
    '#d77e6f',
    '#b38f6a',
    '#6667ab',
    '#d75078',
    '#217925',
    '#85a0a9'
  ], []);

  useEffect(() => {
    if (user) {
      dispatch(fetchData({ userId: user.id, surveyId: 1 }))
      .then((action: PayloadAction<Record<string, number>, string, { arg: { userId: string; surveyId: number; }; requestId: string; requestStatus: "fulfilled"; }, never> | PayloadAction<unknown, string, { arg: { userId: string; surveyId: number; }; requestId: string; requestStatus: "rejected"; aborted: boolean; condition: boolean; } & ({ rejectedWithValue: true; } | ({ rejectedWithValue: false; } & {})), SerializedError>) => {
        const data: Record<string, number> = action.payload as Record<string, number>;
        setChartData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Log any errors
      });
    }
  }, [dispatch, user?.id]);
  
  

  useEffect(() => {
  var ctx = (document.getElementById('surveyChart') as HTMLCanvasElement).getContext('2d');
  if (ctx) {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const data = {
      labels: Object.keys(chartData),
      datasets: [{
        data: Object.values(chartData),
        backgroundColor: 'rgba(128, 128, 128, 0.3)',
        pointBackgroundColor: colors,
        borderWidth: 0.5,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true,
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
}, [chartData, colors]);

  return (
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
  );
}

export default ChartComponent;
