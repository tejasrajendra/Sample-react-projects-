import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonApp = () => {

    const [pokemonData , setPokemonData]=useState(null)
    const [pokemonName , setPokemonName] = useState('pikachu');
    const [loading , setLoading]= useState(false);

    useEffect(()=>{

        const fetchData = async () =>{
            
            try{

                setLoading(true)
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
                setPokemonData(response.data)
            }catch (error){
                console.log("error fetching the pokemon data ", error)
            }
            finally{
                setLoading(false)
            }
        }

        fetchData();

    }, [pokemonName])

    return (
        <div>

            <h1>Pokemon details</h1>
            <label>
                Enter pokemon name :
                <input type='text'
                value={pokemonName}
                onChange={(e)=>{
                    e.preventDefault()
                    setPokemonName(e.target.value)
                }} />
            </label>

            { loading ? (
                <p> loading....</p>
            ) : (
                pokemonData && (
                    <div>
                        <h2> {pokemonData.name} </h2>
                        <img src={pokemonData.sprites.front_default}
                          alt={`${pokemonData.name} sprite`}
                          style={{ maxWidth: '200px' }}  
                        />
                        <p> Height :  {pokemonData.height} </p>
                        <p> Width : {pokemonData.weight}</p>

                    </div>
                )
            )

            }


        </div>
    )

}

export default PokemonApp;
