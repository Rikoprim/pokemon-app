import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import pokeboll from '../../assert/image/pokeboll.svg'
import { GET_POKEMONS_BY_NAME } from '../../graphql/get-pokemons';
import { ItemType, Pokeball, PokemonCard, PokemonImage, PokemonName, PokemonNumber, TypeCard } from './CardPokemonStyled'
import capitalFirst from '../../utils/capitalize';
import Loader from '../Loader';

const CardPokemon = (props) => {
  const { loading, data } = useQuery(GET_POKEMONS_BY_NAME, {
    variables: {
      name : props.name
    }
  })

  return (
    <>
    {
      loading ?
      <Loader />
      : data ?
      <PokemonCard type={data.pokemon.types[0].type.name} onClick={props.onGoing}>
        <PokemonImage src={data.pokemon.sprites.front_default} alt={props.name}></PokemonImage>
        <PokemonNumber>#{data.pokemon.id}</PokemonNumber>
        <PokemonName>{capitalFirst(props.name)}</PokemonName>
        <Pokeball src={pokeboll} alt='pokeball'></Pokeball>
        {data.pokemon.types.map((event, index) => (
        <TypeCard key={index}>
          <ItemType type={event.type.name}>{event.type.name}</ItemType>
        </TypeCard>
        ))}
      </PokemonCard>
      : undefined
    }
    </>
  );
};

export default CardPokemon;
