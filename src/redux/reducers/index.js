import { combineReducers } from 'redux';
import { pokemonReducers } from './PokemonReducers';

const reducers = combineReducers({
  pokemon: pokemonReducers
})

export default reducers