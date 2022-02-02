import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Line, HeadText, InputForm, FormText, BtnCatch } from './BottomCardStyled';

const getMatch = (a, b) => {
  var matches = [];
  for ( var i = 0; i < a.length; i++ ) {
      for ( var e = 0; e < b.length; e++ ) {
          if ( a[i].name === b[e].name ) matches.push( a[i].name );
      }
  }
  return matches;
}

const BottomCard = (props) => {
  const [translate, setTranslate] = useState(170)
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [errorName, setErrorName] = useState(null)

  const fadeCard = () => {
    if (translate === 170) {
      setTranslate(0)
    } else if (translate === 0) {
      setTranslate(170)
    }
  };

  const GoMyPokemon = () => {
    navigate(`/list-mypokemon`)
  }

  const onSave = async (e) => {
    e.preventDefault();
    setErrorName(null)
    if (name === "") {
      return setErrorName('name isEmpty')
    }

    let data = {
      id: new Date().getTime(),
      name: name,
      types: props.data.pokemon.types,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.data.pokemon.id}.png`
    }
    let arr = [];
    arr.push(data)
    if (localStorage.getItem('pokemon')) {
      let dataPokemon = localStorage.getItem('pokemon')
      let parsePokemon = JSON.parse(dataPokemon)
      let matchName = getMatch(arr, parsePokemon)
        if (matchName.length !== 0 ) {
          setErrorName('name isSame')
        } else {
          parsePokemon.push(data)
          localStorage.setItem("pokemon", JSON.stringify(parsePokemon));
          GoMyPokemon()
        }
    } else {
      localStorage.setItem("pokemon", JSON.stringify(arr));
      GoMyPokemon()
    }
  }
  
  return (
    <Card style={{
      WebkitTransform: `translateY(${translate}px)`,
      transform: `translateY(${translate}px)`,
    }}>
      <Line onClick={() => fadeCard()}></Line>
      <Container>
        <HeadText>Catch your pokemon now</HeadText>
        <form onSubmit={onSave}>
          <InputForm
            onChange={e => setName(e.target.value)}
            type='text' 
            placeholder='Enter Name Pokemon'></InputForm>
          <FormText
            style={{
              display: errorName === 'name isEmpty' || errorName === 'name isSame' ? 'block' : 'none',
              color: errorName === 'name isEmpty' || errorName === 'name isSame' ? '#eb5a4d' : '#C4C4C4'
            }}
          >{errorName === 'name isEmpty' ? "You haven't entered the info yet" : "name entered already exists"}</FormText>
          <BtnCatch type='submit'>Catch Pokemon</BtnCatch>
        </form>
      </Container>
    </Card>
  );
};

export default BottomCard;

