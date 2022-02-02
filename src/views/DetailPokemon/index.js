import React from 'react';
import back from '../../assert/image/back-min.svg'
import TabsDetail from '../../components/TabsDetail';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS_BY_NAME } from '../../graphql/get-pokemons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
  Container,
  Header,
  Curve, 
  BtnBack, 
  PokemonNumber,
  PokemonName,
  PokemonImage,
  TypeCard,
  ItemType,
  ImageWrapper,
  ListCard,
  ColLeft,
  ColRight
} from './DetailPokemonStyled';
import { setPokemonByName } from '../../redux/actions/PokemonActions';
import capitalFirst from '../../utils/capitalize';
import BottomCard from '../../components/BottomCard';
import Loader from '../../components/Loader';

const DetailPokemon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMONS_BY_NAME, {
    variables: {
      name : name
    }
  })

  const goBack = () => {
    navigate(-1)
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return `Error! ${error.message}`;
  }
  if (data) {
    dispatch(setPokemonByName(data))
  }
  return (
    <>
    <Container>
      <Curve type={data.pokemon.types[0].type.name}></Curve>
      <Header>
        <ColLeft>
          <BtnBack src={back} alt='back' onClick={() => goBack()}></BtnBack>
          <PokemonNumber>#{data.pokemon.id}</PokemonNumber>
          <PokemonName>{capitalFirst(data.pokemon.name)}</PokemonName>
          {data.pokemon.types.map((event, index) => (
            <TypeCard key={index}>
              <ItemType>{event.type.name}</ItemType>
            </TypeCard>
          ))}
        </ColLeft>
        <ColRight>
          <ImageWrapper>
            <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.pokemon.id}.png`} alt='pokemon'></PokemonImage>
          </ImageWrapper>
        </ColRight>
      </Header>
      <ListCard>
        <TabsDetail data={data} />
      </ListCard>
    </Container>
    <BottomCard data={data} />
    </>
  );
};

export default DetailPokemon;
