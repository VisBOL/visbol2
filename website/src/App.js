import logo from './visbol.png';
import './App.css';
import { createDisplay } from 'visbol';
import Visualize from './Visualize';
import { useEffect, useState } from 'react';
import Editors from './Editors';

function App() {
  const [sbol, setSbol] = useState(undefined);
  const [displayList, setDisplayList] = useState(undefined);
  const readFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      setSbol(text);
    };
    reader.readAsText(e.target.files[0])
  }
  useEffect(() => {
    if (sbol) {
        createDisplay(sbol)
        .catch((err) => console.log(err))
        .then(display => setDisplayList(display));
    }
  }, [sbol])
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="container">
        <Editors sbol={sbol} setSbol={setSbol} displayList={displayList} setDisplayList={setDisplayList} />
        <div className="design">
          <Visualize sbol={sbol} displayList={displayList} readFile={readFile} />
        </div>
      </div>
    </div>
  );
}

export default App;