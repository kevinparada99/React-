import imgrickymorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
   
  const [characters, setcharacters] = useState(null);

  const reqapi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
    setcharacters(characterApi.results);
    console.log(characterApi);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'>Ricky & morty</h1>
      {characters ? (
      <Characters characters={characters} setcharacters={setcharacters} />
      ): (
        <>
       <img src={imgrickymorty} alt='ricky & morty' className='img-home' />
      <button onClick={reqapi} className="btn-search">Buscar Personajes</button>
     
    </>
      )}
     
     </header>
    </div>
  );
}

export default App;
