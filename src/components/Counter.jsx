import { useState } from "react";

export function Tiriye(){

  let [count, setCount] = useState(0);
count = 500;
  return (
    <div style={{backgroundColor:"yellow"}}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count -1)}>Decrease</button>
    </div>
  );
 }
export default Tiriye;


