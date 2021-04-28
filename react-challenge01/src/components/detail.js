import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {addFav} from '../store/actions';

function Home() {
    let [pokemon, setPokemon] = useState({});
    let history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            setPokemon(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const goHome = () => {
        history.push('/');
    }

    const addPokemon = (data) => {
        addFav(data, dispatch)
    }

    if (!pokemon.name) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt="Pokemon_sprite" />
            </div>

            <div>
                <h3>Types:</h3>
                <ul>
                    {
                        pokemon.types.map((type, idx) => {
                            return <li>{type.type.name}</li>
                        })
                    }
                </ul>
            </div>
            <div>
                <h3>Abilities:</h3>
                <ul>
                    {
                        pokemon.abilities.map((ability, idx) => {
                            return <li>{ability.ability.name}</li>
                        })
                    }
                </ul>
            </div>
            <div>
                <h3>Stats:</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Power</th>
                    </tr>
                    {
                        pokemon.stats.map((stat, idx) => {
                            return (
                                <tr>
                                    <td>{stat.stat.name}</td>
                                    <td>{stat.base_stat}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <button onClick={() => addPokemon(pokemon)}>Add To Favourite</button>
            <button onClick={goHome}>Go Home</button>
        </div>
    )
};

export default Home;