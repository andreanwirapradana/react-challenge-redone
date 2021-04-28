import React, {useState, useEffect} from 'react';

function Pokemon() {
    let [pokemons, setPokemons] = useState([]);
    let [status, setStatus] = useState(false);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results)
            setPokemons(data.results)
        })
    })

    if (pokemons.length === 0) {
        return <h1>Loading</h1>
    }

    const handleStatusChange = () => {
        let bool = false;
        if (!status) {
            bool = true;
        }
        setStatus(bool)
    }

    return (
        <div>
            {
                status ? <h1>Fuck This shit</h1>
                :
                null
            }
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
                                    <button onClick={handleStatusChange}>See Detail</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )

}

export default Pokemon;