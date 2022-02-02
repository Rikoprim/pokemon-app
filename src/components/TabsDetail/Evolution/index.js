import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvolusion } from '../../../redux/actions/PokemonActions';
import capitalFirst from '../../../utils/capitalize';
import getIDFromUrl from '../../../utils/getIDfromURL';
import { Container, EvolutionWrapper, PokemonImage, PokemonName } from './EvolutionStyled';

const Evolution = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const idChain = useSelector(state => state.pokemon.species)
  const idEvolution = getIDFromUrl(idChain.evolution_chain.url)
  const evolution = useSelector(state => state.pokemon.evolution)

  useEffect(() => {
    (async () => {
      await dispatch(getEvolusion(idEvolution)).then((res) => {
        if (res) setLoading(true)
      })
    })()
  }, [dispatch, idEvolution]);

  return (
    <Container>
      {loading === false ? (
        <></>
      ) : (
      <>
        { evolution.map((item, key) => (
        <EvolutionWrapper key={key}>
          <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIDFromUrl(item.url)}.png`} alt='item.species_name'></PokemonImage>
          <PokemonName>{capitalFirst(item.species_name)}</PokemonName>
        </EvolutionWrapper>
        ))}
      </>
    )}
    </Container>
  );
};

export default Evolution;
