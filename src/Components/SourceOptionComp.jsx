import { useState } from 'react';

export default function SourceOption({ setSource }) {
   const [imgSrc, setImgSrc] = useState(null);

   /**
    * Change the source to inputed image.
    *
    * @param {InputEvent} event
    */
   function updateSource(event) {
      const file = event.target.files[0];
      URL.revokeObjectURL(imgSrc);
      setImgSrc(file ? URL.createObjectURL(file) : null);
      setSource(file);
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
               src={imgSrc}
               alt='Preview gambar yang dipilih'
               className={imgSrc ? 'SourceOption-ImagePreview' : 'hidden'}
            />
            <div className={imgSrc && 'hidden'}>Preview gambar</div>
         </div>
      </section>
   );
}