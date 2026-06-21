import * as tf from '@tensorflow/tfjs';

const DIMENSION  = [28, 28];
const MODEL_PATH = import.meta.env.VITE_MODEL_PATH;

const model = await tf.loadGraphModel(MODEL_PATH);

/**
 * Convert HTML element into a tensor with determined shape for model
 * prediction.
 *
 * @param {HTMLImageElement | HTMLCanvasElement} element 
 * @returns {tf.Tensor<tf.Rank>}
 */
function element2tensor(element) {
   return tf.tidy(() => {
      const tensor = tf.browser.fromPixels(element);
      return tensor
         .toFloat()
         .div(tf.scalar(255))
         .expandDims(0);
   });
}

/**
 * Preprocess the tensor to match the tensor input format for model inference.
 *
 * @param {tf.Tensor<tf.Rank>} tensor 
 * @returns {tf.Tensor3D | tf.Tensor4D}
 */
function preprocessTensor(tensor) {
   return tf.tidy(() => {
      const resized = tf.image.resizeNearestNeighbor(tensor, DIMENSION);
      return resized;
   })
}

/**
 * Run an async mnist model inference from HTML element.
 *
 * @param {HTMLImageElement | HTMLCanvasElement} element
 * @returns { Promise<{ raw: number[]; sorted: number[]; }> }
 */
export async function predict(element) {
   const tensor      = preprocessTensor(element2tensor(element));
   const prediction  = await model.predict(tensor);
   const probability = await prediction.array();

   tensor.dispose();
   prediction.dispose();

   const probWithLabel = [...probability[0].entries()];

   return {
      raw    : probWithLabel,
      sorted : probWithLabel.toSorted((a, b) => a[1] - b[1])
   };
}