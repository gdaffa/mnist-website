import * as tf from '@tensorflow/tfjs';

const DIMENSION  = [28, 28];
const MODEL_PATH = import.meta.env.VITE_MODEL_PATH;

const model = await tf.loadGraphModel(MODEL_PATH);

/**
 * 
 * @param {number} result 
 * @param {number} label 
 */
export function extractLabel(result, label) {
   return [label, result];
}

function element2tensor(element) {
   return tf.tidy(() => {
      const tensor  = tf.browser.fromPixels(element);
      const resized = tf.image.resizeNearestNeighbor(tensor, DIMENSION);

      return resized
         .toFloat()
         .div(tf.scalar(255))
         .expandDims(0);
   });
}

export async function predict(element) {
   const tensor      = element2tensor(element);
   const prediction  = await model.predict(tensor);
   const probability = await prediction.array();

   tensor.dispose();
   prediction.dispose();

   return {
      raw    : probability[0].map(extractLabel),
      sorted : probability[0].map(extractLabel).sort((a, b) => a[1] - b[1])
   };
}