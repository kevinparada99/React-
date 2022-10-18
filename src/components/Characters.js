export default function Characters(props) {
const { characters, setcharacters } = props;

 const Resetear = ()=>{
setcharacters(null)
 }


  return ( 
  <div className="characters">
 <h1>Personajes</h1>
 <span className="back-home" onClick={Resetear}> Volver a la home</span> 
 <div className="container-characters">
  {characters.map(( character, index ) => (
    
    <div className="character-container" key={index}>
     <div>
      <img src={character.image} alt={character.image}/>
     </div>
     <div>
      <h1>{character.name}</h1>
      <h6>
        {character.status === "Alive" ?(
          <>
          <span className="alive" />
          Alive
          </>
        ):(
        <>
        <span className="dead"/>
          dead
        </>
        )}
      </h6>
      <p>
        <span className="text-grey">Episodios: </span>
        <span>{character.episode.length}</span>
      </p>
      <p>
        <span className="text-grey">Especies: </span>
        <span>{character.species}</span>
      </p>
      
     </div>
     
    </div>

   ))}


 </div>
 <span className="back-home"  onClick={Resetear}> Volver a la home</span> 
</div>

  );
  
}

