import { useState } from "react"

export default function App() {

  let [count, setCount] = useState(0);
  const [products, setProducts] = useState(null);

  const increment = () => {
    // count = count + 1;
    // console.log(count);
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      {count}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}