import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const REGULAR_BAR_COLOR     = '#d6d3d1';
const HIGHLIGHTED_BAR_COLOR = '#292524';

const displayFalse = { display: false };
const chartOption  = {
   maintainAspectRatio : false,
   plugins             : { legend: displayFalse },
   indexAxis           : 'y',

   borderRadius  : Number.MAX_VALUE,
   borderSkipped : false,
   barThickness  : 20,

   scales : {
      x : {
         border : displayFalse,
         ticks  : { font: { size: 14 } },
      },
      y : {
         grid   : displayFalse,
         border : displayFalse,
         ticks  : { font: { size: 14 } }
      }
   },
};

/**
 * @param {{
 *    prediction: {
 *       raw    : [number, number][];
 *       sorted : [number, number][];
 *    };
 * }} param0
 */
function BarChart({ prediction }) {
   const predictionLabel  = prediction.raw.map(pred => pred[0]);
   const predictionResult = prediction.raw.map(pred => pred[1]);

   const backgroundColor = Array(10).fill(REGULAR_BAR_COLOR);
   backgroundColor[prediction.sorted.at(-1)[0]] = HIGHLIGHTED_BAR_COLOR;

   const chartData = {
      labels   : predictionLabel,
      datasets : [{ data: predictionResult, backgroundColor }]
   };

   return <Bar options={chartOption} data={chartData} />
}

/**
 * @param {{
 *    prediction: {
 *       raw    : [number, number][];
 *       sorted : [number, number][];
 *    };
 * }} param0
 */
export default function ChartResultComp({ className, prediction }) {
   return (
      <section className={`Card ${className}`}>
         <h2>Visualisasi Probabilitas</h2>
         <div className='h-82 w-full'>
            <BarChart prediction={prediction} />
         </div>
      </section>
   )
}