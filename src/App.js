import React from 'react';
import InputValues from './Components/InputValues'
import LPP from './Components/LPP'
import LPPStepByStep from './Components/LPPStepByStep'
import KMPSolution from './Components/KMPSolution'

function App() {

  return (
    <div className="App container mx-auto">
      <h1 className="font-bold text-5xl mb-4">Substring Search</h1>
      <InputValues />
      <LPP />
      {/* <LPPStepByStep /> */}
      <KMPSolution />
    </div>
  );
}

export default App;
