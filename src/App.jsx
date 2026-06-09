import { useState } from "react";

function SourceOption({ setSource }) {
   return (
      <section className="Card SourceOption">
         <input
            type="file"
            id="uploaded-image"
            className="hidden"
            accept="image/jpeg,image/jpg,image/png"
            onInput={e => setSource(!!e.target.files[0])}
         />
         <div className="text-sm text-stone-500 mb-2">
            Pilih yang ingin diprediksi
         </div>
         <label
            className="btn bg-stone-800 border-stone-800 text-stone-100"
            htmlFor="uploaded-image"
         >
            Upload Gambar
         </label>
         <label
            className="btn bg-transparent text-stone-700 border-stone-500"
         >
            Gambar Sendiri
         </label>
      </section>
   );
}

function PredictionResult({ source }) {
   const result = 6;
   const className = `Card gap-2" ${!source  && 'opacity-50'}`

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
   )
}

export default function App() {
   const [source, setSource] = useState(false);

   return (
      <main className="h-dvh w-full bg-stone-200 p-4 flex flex-col gap-4">
         <SourceOption setSource={setSource} />
         <PredictionResult source={source} />
      </main>
   );
}