import React, { useState } from 'react';
import { 
  ItemType, 
  Pokeball, 
  PokemonCard, 
  PokemonImage, 
  PokemonName, 
  PokemonNumber,
  BtnAction,
  ModalAction,
  ModalBtn,
  TypeCard } from './CardDetailStyled';
import pokeboll from '../../../assert/image/pokeboll.svg'
import imageBtn from '../../../assert/image/horizontal.svg'
import capitalFirst from '../../../utils/capitalize';

const CardDetail = (props) => {
  const [btnAction, setBtnAction] = useState(false)
  const openModal = () => {
    btnAction === false ? setBtnAction(true) : setBtnAction(false)
  }

  return (
    <PokemonCard type={props.types[0].type.name}>
      <BtnAction src={imageBtn} onClick={() => openModal()} alt='action'></BtnAction>
      <ModalAction style={{
        display: btnAction === true ? 'block' : 'none'
      }}>
        <ModalBtn onClick={props.onDelete}>Delete</ModalBtn>
      </ModalAction>
      <PokemonImage src={props.image} alt={props.name}></PokemonImage>
      <PokemonNumber>#{props.number+1}</PokemonNumber>
      <PokemonName>{capitalFirst(props.name)}</PokemonName>
      <Pokeball src={pokeboll} alt='pokeball'></Pokeball>
      {props.types.map((event, index) => (
      <TypeCard key={index}>
        <ItemType type={event.type.name}>{event.type.name}</ItemType>
      </TypeCard> 
      ))}
    </PokemonCard>
  );
};

export default CardDetail;
