export function extractLabel(result, label) {
   return [label, result];
}

export function predict() {
   const logits     = Array(10).fill(0)
      .map(() => Math.pow(Math.random() * 10, 3));
   const total      = logits.reduce((prev, curr) => prev + curr, 0);
   const prediction = logits.map(val => val / total);

   return {
      raw    : prediction.map(extractLabel),
      sorted : prediction.map(extractLabel).sort((a, b) => a[1] - b[1])
   };
}