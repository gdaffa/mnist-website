/**
 * @param {{
 *    prediction: {
 *       raw    : [number, number][];
 *       sorted : [number, number][];
 *    };
 * }} param0
 */
export default function PredictionResultComp({ prediction, className }) {
   const [predicted, confidence] = prediction.sorted.at(-1);

   return (
      <section className={`Card gap-2 ${className}`}>
         <h2 className="col-1">Hasil Prediksi</h2>
         <div className="text-8xl text-stone-900 grid place-items-center">
            {predicted}
         </div>
         <div className="text-sm col-1">
            Model memprediksi itu sebagai angka <b>{predicted}</b> dengan
            keyakinan sebesar <b>{parseInt(confidence * 10000) / 100}%</b>.
         </div>
      </section>
   );
}
