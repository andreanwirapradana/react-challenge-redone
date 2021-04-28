const initialState = {
    user: {},
    favouritesPokemons: [],
    isLogin: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log(action, "==> ini dari reducers")
            return {
                ...state,
                isLogin: true,
                user: action.userData
            };
            break;
        case "LOGOUT":
            return {
                ...state,
                isLogin: false,
                user: {},
                favouritesPokemons: []
            }
        case "ADD_FAVOURITE":
            return {
                ...state,
                favouritesPokemons: state.favouritesPokemons.concat(action.pokemonData)
            }
        default:
            return state;
    }
}

export default reducer;