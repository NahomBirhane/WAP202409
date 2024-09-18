import { useState } from "react";
import CleanUp from "./components/useEffect-demo/CleanUp";
import FetchDemo from "./components/useEffect-demo/FetchDemo";
import Logging from "./components/useEffect-demo/Logging";
import Product from "./components/useEffect-demo/Product";
import CSSDemo from "./components/css-demos/CSSDemo";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div className="container">
      <h1 className="foo">App</h1>
      {/* <Parent/> */}
      {/* <Parent /> */}
      {/* <FetchDemo /> */}
      {/* <Logging /> */}
      {/* <Product /> */}
      {/* {flag && <CleanUp />}
      <button onClick={() => setFlag(!flag)}>Toggle</button> */}
      <CSSDemo />
    </div>
  );
}

export default App;
