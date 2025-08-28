import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("/public/bottles.json").then((res) => res.json());

function App() {
  
  return (
    <>
      <h2>Buy Awesome Water Bottle</h2>
      
      <Suspense fallback={<h3>Battles are loading..</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
