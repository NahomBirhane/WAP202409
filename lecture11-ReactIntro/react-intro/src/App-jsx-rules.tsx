import './App.css';

function sum(num1: number, num2: number){
  return num1 + num2;
}

function MyComp(){
  console.log('Inside Mycomp');
  return <h2>Inside MyComp</h2>;
}



function App() {
  const greeting = 'Hello from MIU!';
  // this is a comment
  /** this is a comment */
  return (
    <>
      <h1 className='container main'>{greeting}</h1>
      <p style={{color: 'red', backgroundColor: 'yellow'}}>This is a p</p>
      <div>
        {2+3}
        {sum(3,4)}
      </div>
      <hr></hr>
      <br/>
      {/* <MyComp/> */}
    </>
  );
}
//expression vs statements

export default App;
