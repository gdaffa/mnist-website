function SourceOption() {
   return (
      <section className="SourceOption">
         <div className="SourceOption-Card">
            <input
               type="file"
               id="uploaded-image"
               className="hidden"
               accept="image/jpeg,image/png"
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
         </div>
      </section>
   );
}

export default function App() {
   return (
      <main className="h-dvh w-full bg-stone-200">
         <div className="block h-[50%]"></div>
         <SourceOption />
      </main>
   );
}
