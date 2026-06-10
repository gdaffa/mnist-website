export default function PredictionResultComp({ source }) {
   const result = 6;
   const className = `Card gap-2" ${!source && 'opacity-50'}`;

   return (
      <section className={className}>
         <h2 className="col-1">Hasil Prediksi</h2>
         <div className="text-8xl text-stone-900 grid place-items-center">
            {result}
         </div>
         <div className="text-sm col-1">
            Model memprediksi itu sebagai angka <strong>{result}</strong> dengan
            keyakinan sebesar <strong>98%</strong>.
         </div>
      </section>
   );
}
