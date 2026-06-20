import { useRef, useEffect } from 'react';
import { predict } from '../model';

export default function SourceOption({ source, setSource, setPrediction }) {
   const img = useRef(null);

   useEffect(() => {
      img.current.onload = async () => {
         if (!img.current.src) {
            return;
         }

         const prediction = await predict(img.current);
         setPrediction(prediction);
      }
   }, [setPrediction]);

   /**
    * Change the source to inputed image.
    *
    * @param {InputEvent} event
    */
   async function updateSource(event) {
      const file = event.target.files[0];
      setSource(file);

      URL.revokeObjectURL(img.current.src);
      img.current.src = file ? URL.createObjectURL(file) : null;
   }

   return (
      <section className="Card SourceOption">
         <input
            type="file"
            id="uploaded-image"
            className="hidden"
            accept="image/jpeg,image/jpg,image/png"
            onInput={updateSource}
         />
         <div className="text-sm text-stone-500">
            Pilih yang ingin diprediksi
         </div>
         <label className="Btn Btn_primary" htmlFor="uploaded-image">
            Upload Gambar
         </label>
         <label className="Btn Btn_secondary -mt-2">
            Gambar Sendiri
         </label>
         <div className='SourceOption-PreviewSection'>
            <img
               ref={img}
               alt='Preview gambar yang dipilih'
               className={source ? 'SourceOption-ImagePreview' : 'hidden'}
            />
            <div className={source && 'hidden'}>Preview gambar</div>
         </div>
      </section>
   );
}