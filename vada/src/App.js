import './App.css';
import React, {useState} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const [vada, setVada] = useState('eggg');
  const changeText = () => {
    setVada(generateRandomString())
  }
  const {speak} = useSpeechSynthesis();
  const getRandomListElement = (strings) => {
    return strings[Math.floor(Math.random() * strings.length)]
  }

  const generateRandomString = () => {
    let stringsList = [
      'vada pav',
      'batata vada',
      'medu vada',
      'dahi vada',
      'daar vada',
      'parle g',
      'cringe',
      'prajacta',
    ]

    let final = ""
    for (let i = 0; i <10; i++) {

      final += getRandomListElement(stringsList) + ' '
    }

    return final;
  }

  return (
    <div className="App">
      <header className="App-header">
        <a>
          {vada}
        </a>
        <button onClick = {changeText}>change</button>
        <button onClick = {() => speak({text:vada})}>speak</button>
      </header>
    </div>
  );
}

export default App;

