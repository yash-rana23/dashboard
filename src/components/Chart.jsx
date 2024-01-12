import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  
};

const labels = ['20', '25', '30', '35', '40', '60','65'];

 const data = {
   labels,
   datasets: [
     {
       label: '',
       data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
       backgroundColor: 'rgba(133, 175, 255, 1)',
     },
     {
       label: '',
       data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
       backgroundColor: 'rgba(73, 53, 255, 1)',
     },
     {
       label: '',
       data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
       backgroundColor: 'rgba(8, 0, 163, 1)',
     },
   ],
 }

function Chart() {
  return <Bar options={options} data={data} />;
}
export default Chart;