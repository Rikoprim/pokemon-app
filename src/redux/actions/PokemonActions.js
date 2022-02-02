import { ApiDefault } from "../../services/api";
import { Types } from "../constants/Types";

export const setPokemon = (data) => {
  return {
    type: Types.SET_POKEMON,
    payload: data
  }
}

export const removePokemon = () => {
  return {
    type: Types.REMOVE_POKEMON,
  }
}

export const setPokemonByName = (data) => {
  return {
    type: Types.SET_POKEMON_BY_NAME,
    payload: data
  }
}

export const removePokemonByName = () => {
  return {
    type: Types.REMOVE_POKEMON_BY_NAME,
  }
}

export const removeSpecies = () => {
  return {
    type: Types.REMOVE_SPECIES,
  }
}

export const getSpecies = (id) => {
  return async (dispatch) => {
    return new Promise ((resolve, reject) => {
      try {
        ApiDefault.get(`pokemon-species/${id}`)
        .then((respon) => {
          resolve(respon.data)
          dispatch({ type: Types.GET_SPECIES, payload: respon.data })
        })
      } catch (error) {
        reject(error)
      }
    })
  }
};

export const getEvolusion = (id) => {
  return async (dispatch) => {
    return new Promise ((resolve, reject) => {
      try {
        ApiDefault.get(`evolution-chain/${id}`)
        .then((respon) => {
          resolve(respon.data)

          var evoChain = [];
          var evoData = respon.data.chain;
        
          do {
            var evoDetails = evoData['evolution_details'][0];
          
            evoChain.push({
              "species_name": evoData.species.name,
              "min_level": !evoDetails ? 1 : evoDetails.min_level,
              "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
              "item": !evoDetails ? null : evoDetails.item,
              "url": evoData.species.url,
            });
          
            evoData = evoData['evolves_to'][0];
          } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
          dispatch({ type: Types.GET_EVOLUTION, payload: evoChain })
        })
      } catch (error) {
        reject(error)
      }
    })
  }
};
