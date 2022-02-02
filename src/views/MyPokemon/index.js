import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../assert/image/back.svg'
import Error from '../../components/Error';
import CardDetail from '../MyPokemon/CardDetail';
import { BtnBack, Container, HomeWrapper, ListCard, NavHeader } from './MyPokemonStyled';

const MyPokemon = () => {
  const navigate = useNavigate();
  const childRef = useRef();
  const [dataPokemon, setAllppokemon] = useState([])

  const goBack = () => {
    navigate(`/`)
  }

  const onDelete = (id) => {
    let dataPokemon = localStorage.getItem('pokemon')
    let parsePokemon = JSON.parse(dataPokemon)

    parsePokemon.splice(id, 1)
    localStorage.setItem("pokemon", JSON.stringify(parsePokemon));
    getData();
  }

  const getData = () => {
    if (localStorage.getItem('pokemon')) {
      let dataPokemon = localStorage.getItem('pokemon')
      let parsePokemon = JSON.parse(dataPokemon)
      setAllppokemon(parsePokemon)
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <Container>
      <HomeWrapper>
        <BtnBack onClick={goBack} src={back} alt='back'></BtnBack>
        <NavHeader>My Pokemon</NavHeader>
      </HomeWrapper>
        <ListCard>
          {
            dataPokemon.map((event, key) => (
              <CardDetail 
                key={key}
                number={key}
                name={event.name}
                image={event.image}
                types={event.types}
                onDelete={() => onDelete(key)}
                onClick={() => childRef.current.openModal()}
              />
            ))
          }
          { dataPokemon.length === 0 ? 
          <Error 
            title={'No data shown'} 
            text={'Add your pokemon collection now.'}
          />
          : undefined
        }
        </ListCard>
    </Container>
  );
};

export default MyPokemon;
