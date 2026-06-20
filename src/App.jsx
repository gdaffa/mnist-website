import { useState } from "react";

import SourceOptionComp from "./Components/SourceOptionComp";
import PredictionResultComp from "./Components/PredictionResultComp";
import ChartResultComp from './Components/ChartResultComp';

export default function App() {
   const [source, setSource]         = useState(null);
   const [prediction, setPrediction] = useState({
      raw    : [...Array(10).fill(1).entries()],
      sorted : [...Array(10).fill(1).entries()]
   });

   const childrenOpacity = source != null ? '' : 'opacity-45';

   return (
      <main className="min-h-dvh w-full bg-stone-200 p-4 flex flex-col gap-4">
         <SourceOptionComp
            source={source}
            setSource={setSource}
            setPrediction={setPrediction}
         />
         <PredictionResultComp
            prediction={prediction}
            className={childrenOpacity}
         />
         <ChartResultComp
            prediction={prediction}
            className={childrenOpacity}
         />
      </main>
   );
}