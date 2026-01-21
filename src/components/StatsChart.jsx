'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatsChart({ characters }) {
  const speciesCounts = characters.reduce((acc, char) => {
    acc[char.species] = (acc[char.species] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(speciesCounts),
    datasets: [{
      data: Object.values(speciesCounts),
      backgroundColor: ['#D4AF37', '#570DF8', '#37CDBE', '#FF5724', '#661AE6'],
      borderWidth: 0,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Importante para contenedores pequeños
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    cutout: '70%',
  };

  return (
    /* Forzamos dimensiones mínimas para que Chart.js detecte espacio para dibujar */
    <div style={{ position: 'relative', height: '150px', width: '150px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}