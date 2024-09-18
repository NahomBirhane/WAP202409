import './App.css';

const MyComp = () => {
  return <h2>My Comp</h2>
}


function App() {

  const cities: string[] = ['Ottumwa', 'Iowa City', 'Fairfield'];

  return (
    <>
      <ul>
        {cities.map((c, index) => <li key={index}>{c}</li>)}
      </ul>
      <MyComp />
    </>
  );

}

export default App;
