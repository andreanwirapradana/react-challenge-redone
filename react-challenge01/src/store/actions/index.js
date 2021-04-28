export const login = (userName, email, dispatch, getState) => {
    const loginData = {
        userName, email
    }

    dispatch({
        type: "LOGIN",
        userData: loginData
    })
};

export const addFav = (pokemonData, dispatch, getState) => {
    console.log(pokemonData, "masuk actions")

    dispatch({
        type: "ADD_FAVOURITE",
        pokemonData
    })
}