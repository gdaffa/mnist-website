export default function SourceOption({ setSource }) {
   return (
      <section className="Card SourceOption">
         <input
            type="file"
            id="uploaded-image"
            className="hidden"
            accept="image/jpeg,image/jpg,image/png"
            onInput={e => setSource(e.target.files[0])} />
         <div className="text-sm text-stone-500">
            Pilih yang ingin diprediksi
         </div>
         <label className="Btn Btn_primary" htmlFor="uploaded-image">
            Upload Gambar
         </label>
         <label className="Btn Btn_secondary -mt-2">
            Gambar Sendiri
         </label>
      </section>
   );
}
