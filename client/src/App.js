import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react'

function App() {

  useEffect(() => {

    const PORT = process.env.REACT_APP_SERVER_PORT
    console.log(PORT);
    const test = async () => {
     const test01 = await fetch('http://localhost:3000/products');

     const test02 = await test01.json();

     console.log(test02);

    }

    test()
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         { `${process.env.REACT_APP_SERVER_PORT}` }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
