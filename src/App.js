import React from 'react';
import { fetchPokemon } from './getPokemon';
import { useState } from 'react';
import Search from './Search';
import PokemonData from './PokemonData';
import { Spinner } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const spinnerStyle = {
    width: '10rem',
    height: '10rem',
    borderWidth: '1rem',
    textAlign: 'center'
}

const App = () => 
{
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg]=useState('');
    const getPokemon = async (query) =>{
        if(!query) 
        {
            setErrorMsg('You must enter a Pokemon');
            setError(true);
            return;
        }            
        setError(false);
        setLoading(true);
        setTimeout(async()=>{
            try{
                const response = await fetchPokemon(query);
                const results = await response.json();
                setPokemon(results);
                setLoading(false);
            }   
            catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
                setErrorMsg('Pokemon not found');
            }
        }, 200);
    };
    return (
        <div>
            {error  ? (<Alert variant='danger'>{errorMsg}</Alert>): null}
            <Search getPokemon={getPokemon}/>
            {loading?(<div style={{textAlign: 'center', margin:'50px'}}>
                <Spinner animation="border" style={spinnerStyle}></Spinner>
            </div>):null}
        {!loading && pokemon?(
            <PokemonData 
            id={pokemon.game_indices[3].game_index} 
            name={pokemon.name} 
            sprite={pokemon.sprites.other.dream_world.front_default} 
            abilities={pokemon.abilities}
            stats={pokemon.stats}
            types={pokemon.types}
            />
        ):null}
        </div>
    );
}

export default App;