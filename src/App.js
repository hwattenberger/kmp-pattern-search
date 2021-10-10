import './App.css';
import React, {useState} from 'react';
import InputValues from './Components/InputValues'
import LPP from './Components/LPP'
import KMPSolution from './Components/KMPSolution'

function App() {
  const [substring, setSubstring] = useState("ababd");
  const [string, setString] = useState("ababcabcabababd");
  const [lppArr, setLppArr] = useState([]);

  return (
    <div className="App container mx-auto">
      <h1 className="font-bold text-5xl mb-4">Substring Search</h1>
      <InputValues setSubstring={setSubstring} substring={substring} string={string} setString={setString} />
      <LPP substring={substring} lppArr={lppArr} setLppArr={setLppArr}/>
      <KMPSolution string={string} lppArr={lppArr} substring={substring}/>
    </div>
  );
}

export default App;
