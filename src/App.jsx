import { useState } from "react";
import SourceOptionComp from "./Components/SourceOptionComp";
import PredictionResultComp from "./Components/PredictionResultComp";

export default function App() {
   const [source, setSource] = useState(false);

   return (
      <main className="h-dvh w-full bg-stone-200 p-4 flex flex-col gap-4">
         <SourceOptionComp setSource={setSource} />
         <PredictionResultComp source={source} />
      </main>
   );
}