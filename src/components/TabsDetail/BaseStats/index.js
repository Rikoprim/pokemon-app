import React from 'react';
import { useSelector } from 'react-redux';
import capitalFirst from '../../../utils/capitalize';
import getColorType from '../../../utils/getColorType';
import ProgressBar from '../../ProgressBars';
import { 
  Container,
  LeftTitle, 
  RightTitle, 
  Row, 
  TitleHead,
  Moves,
  ItemMoves
} from './BaseStatsStyled';

const sumArray = (data) => {
  let arr = [];
  let result
  data.map(event => {
    arr.push(event.base_stat)
    result = arr.reduce((a, b) => a + b, 0)
  })
  return result;
}

const Stats = () => {
  const details = useSelector(state => state.pokemon.pokemonName)
  
  return (
    <Container>
      <TitleHead type={details.pokemon.types[0].type.name}>Base Stats</TitleHead>
      { details.pokemon.stats.map((item, key) => (
        <Row key={key}>
          <LeftTitle>{capitalFirst(item.stat.name)}</LeftTitle>
          <ProgressBar
            barColor={getColorType(details.pokemon.types[0].type.name)}
            fillAmount={item.base_stat / 100}
            />
          <RightTitle style={{textAlign: 'right'}}>{item.base_stat}</RightTitle>
        </Row>
      ))}
      <Row>
        <LeftTitle>Total</LeftTitle>
        <ProgressBar
          barColor={getColorType(details.pokemon.types[0].type.name)}
          fillAmount={sumArray(details.pokemon.stats) / 1000}
          />
        <RightTitle style={{textAlign: 'right', fontWeight: 'bold'}}>{sumArray(details.pokemon.stats)}</RightTitle>
      </Row>
      <TitleHead type={details.pokemon.types[0].type.name}>Move</TitleHead>
      <Moves>
      { details.pokemon.moves.map((item, key) => (
        <ItemMoves key={key}>{capitalFirst(item.move.name)}</ItemMoves>
      ))}
      </Moves>
    </Container>
  );
};

export default Stats;
