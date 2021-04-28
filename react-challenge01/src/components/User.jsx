import React from 'react';
import {useSelector} from 'react-redux';


function User() {
    const user = useSelector(state => state.user)
    const favouritePokemons = useSelector(state => state.favouritesPokemons)
    console.log(favouritePokemons, "====> nyampe dong")
    return (
        <div>
            <h1>{`Welcome ${user.userName}`}</h1>
            {
                favouritePokemons.map((pokemon, idx) => {
                    return (
                        <ul>
                            <li>
                                {pokemon.name}
                                <img src={pokemon.sprites.front_default} alt="pokemon_sprite" />
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}


export default User;