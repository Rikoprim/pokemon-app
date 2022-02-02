import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import capitalFirst from '../../../utils/capitalize';
import getIDFromUrl from '../../../utils/getIDfromURL';
import { Container, Description, LeftTitle, RightTitle, Row, TitleHead } from './AboutStyled';
import { getSpecies } from '../../../redux/actions/PokemonActions'

const About = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const details = useSelector(state => state.pokemon.pokemonName)
  const species = useSelector(state => state.pokemon.species)
  const idSpecies = getIDFromUrl(details.pokemon.species.url)

  useEffect(() => {
    (async () => {
      await dispatch(getSpecies(idSpecies)).then((res) => {
        if (res) setLoading(true)
      })
    })()
  }, [dispatch, idSpecies]);
  
  return (
    <Container>
      {loading === false ? (
        <></>
      ) : (
        <>
        <Description>{species.flavor_text_entries[0].flavor_text}</Description>
        <TitleHead type={details.pokemon.types[0].type.name}>Detail Pokeman</TitleHead>
        <Row>
          <LeftTitle>Height</LeftTitle>
          <RightTitle>{details.pokemon.height} m</RightTitle>
        </Row>
        <Row>
          <LeftTitle>Weight</LeftTitle>
          <RightTitle>{details.pokemon.weight} kg</RightTitle>
        </Row>
        <Row>
          <LeftTitle>Habitat</LeftTitle>
          <RightTitle>{species.habitat.name}</RightTitle>
        </Row>
        <Row>
          <LeftTitle>Abilities</LeftTitle>
          {details.pokemon.abilities.map((group, key, array) => (
            <RightTitle key={key}>{capitalFirst(group.ability.name) + ((key + 1 < array.length) ? ',\xa0' : ' ')}</RightTitle>
          ))}
        </Row>
        <TitleHead type={details.pokemon.types[0].type.name}>Training</TitleHead>
        <Row>
          <LeftTitle>Hatch Counter</LeftTitle>
          <RightTitle>{species.hatch_counter}</RightTitle>
        </Row>
        <Row>
          <LeftTitle>Capt Rate</LeftTitle>
          <RightTitle>{species.capture_rate}</RightTitle>
        </Row>
        <Row>
          <LeftTitle>Base Happiness</LeftTitle>
          <RightTitle>{species.base_happiness}</RightTitle>
        </Row>
        <Row>
          <LeftTitle>Growth Rate</LeftTitle>
          <RightTitle>{species.growth_rate.name}</RightTitle>
        </Row>
        <TitleHead type={details.pokemon.types[0].type.name}>Breeding</TitleHead>
        <Row>
          <LeftTitle>Gender</LeftTitle>
          <RightTitle
            style={{
              color: '#00aeef',
              marginRight: 15
            }}>♂ {12.5 * (8 - species.gender_rate)}</RightTitle>
          <RightTitle
            style={{
              color: '#ff00fc'
            }}>♀ {12.5 * species.gender_rate}</RightTitle>
        </Row>
        <Row>
          <LeftTitle>Egg Groups</LeftTitle>
          {species.egg_groups.map((group, key, array) => (
            <RightTitle key={key}>{capitalFirst(group.name) + ((key + 1 < array.length) ? ',\xa0' : ' ')}</RightTitle>
          ))}
        </Row>
        <Row>
          <LeftTitle>Shape</LeftTitle>
          <RightTitle>{capitalFirst(species.shape.name)}</RightTitle>
        </Row>
        </>
      )}
    </Container>
  );
};

export default About;
