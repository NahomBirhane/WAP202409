import { ChangeEvent, MouseEvent } from "react";

function App() {

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Hi!!', e.target);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  const handlePassParamsClick = (username: string, e: MouseEvent<HTMLButtonElement>) => {
    console.log(`Hello ${username}`, e.target);
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <input onChange={handleChange} />
      <button onClick={(e) => handlePassParamsClick('John', e)}>Pass Params</button>
    </>
  );

}

export default App;
