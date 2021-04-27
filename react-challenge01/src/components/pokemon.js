import React, { Component } from "react";
import "../styles/pokemon.css";
import Details from "./detailsPokemon";


class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            showDetail: false
        }
        this.handleShowDetail = this.handleShowDetail.bind(this);
    }


    componentWillMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(data => {
            // const {pokemons} = this.state;
            let arr = [];
            data.results.forEach((element, idx) => {
                // let imgs = [];
                fetch(element.url)
                .then(res => res.json())
                .then(dataFetched => {
                    let pokemon = {
                        name: dataFetched.name,
                        img: dataFetched.sprites.front_default,
                        abilities: dataFetched.abilities,
                        types: dataFetched.types,
                        stats: dataFetched.stats
                    }
                    arr.push(pokemon)
                    this.setState({
                        pokemons: arr
                    })
                })
            });
            // console.log(arr)
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    handleShowDetail() {
        let bool = false;
        if (this.state.showDetail === false) {
            bool = true;
        };
        this.setState({
            showDetail: bool
        })
    }

    render() {
        return (
            <>
                {this.state.pokemons.length === 0 ?
                    <>
                        <p>There is no data yet</p>
                    </>
                    :
                    this.state.pokemons.map((pokemon, idx) => {
                        return (
                            <div className="container-main">
                                <div className="container-inner">
                                    <img src={pokemon.img} alt="fuck" className="image-pokemon" />
                                    <p className="name-text">{pokemon.name}</p>
                                    <Details abilities={pokemon.abilities} types={pokemon.types} stats={pokemon.stats} ></Details> 
                                </div>
                            </div>
                            
                        )
                    })
                }
            </>
        )
    }
}

export default Pokemon;