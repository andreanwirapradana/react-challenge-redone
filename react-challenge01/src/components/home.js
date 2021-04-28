import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

function Detail() {
    let [pokemons, setPokemons] = useState([]);
    let [user, setUser] = useState('');
    const history = useHistory();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results)
            setPokemons(data.results);
        })
    }, [])

    const goDetail = (url) => {
        let output = "";
        let flag = true;
        for (let i = 34; i < url.length; i++) {
            if (flag) {
                output += url[i]
            }

            if (url[i+1] === '/') {
                flag = false;
            }

        }
        return `/pokemon/${output}`
    }

    if (pokemons.length === 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h2>Pokemon Website</h2>
            <button onClick={goDetail}>Go detail</button>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                {
                    pokemons.map((pokemon, idx) => {
                        return (
                            <tr>
                                <td>{pokemon.name}</td>
                                <td>
                                    <button><Link to={goDetail(pokemon.url)} >See Detail</Link></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <button><Link to='/signin'>Sign In</Link></button>
        </div>
    )
};


export default Detail;