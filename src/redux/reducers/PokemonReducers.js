import { Types } from "../constants/Types";

const initialState = {
  pokemon: [],
  pokemonName: [],
  species: [],
  evolution: [],
}

export const pokemonReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SET_POKEMON:
      return {
        ...state,
        pokemon: payload
      }
    case Types.REMOVE_POKEMON:
      return {
        ...state,
        pokemon: []
      }
    case Types.SET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonName: payload
      }
    case Types.REMOVE_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonName: []
      }
    case Types.GET_SPECIES:
      return {
        ...state,
        species: payload
      }
    case Types.REMOVE_SPECIES:
      return {
        ...state,
        species: []
      }
    case Types.GET_EVOLUTION:
      return {
        ...state,
        evolution: payload
      }
    default: 
      return state;
  }
}