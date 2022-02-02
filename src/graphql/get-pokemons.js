import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`

export const GET_POKEMONS_BY_NAME = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    weight
    height
    sprites {
      front_default
      front_female
      front_shiny
      front_shiny_female
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    abilities {
      ability {
        name
        id
      }
    }
    species {
      name
      url
    }
    stats {
      base_stat
      effort
      stat {
        name
      }
    }
  }
}
`