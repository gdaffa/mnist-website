export default function SourceOption({ setSource }) {
   return (
      <section className="Card SourceOption">
         <input
            type="file"
            id="uploaded-image"
            className="hidden"
            accept="image/jpeg,image/jpg,image/png"
            onInput={e => setSource(!!e.target.files[0])} />
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
