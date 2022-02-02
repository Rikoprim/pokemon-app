import React, { useEffect, useRef, useState } from 'react';
import CardPokemon from '../../components/CardPokemon';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { useDispatch } from 'react-redux';
import IcoList from '../../assert/image/list.svg'
import { removePokemonByName, removeSpecies } from '../../redux/actions/PokemonActions';
import { GET_POKEMONS, GET_POKEMONS_BY_NAME } from '../../graphql/get-pokemons';
import { 
  Container, 
  HomeWrapper, 
  NavLink, 
  TitleHead,
  ListCard,
  BtnWrapper,
  BtnLoad,
  ListMyPokemon,
  Row
} from './HomePokemonStyled'
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const HomePokemon = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [limits, setLimits] = useState(0)
  const [search, setSearch] = useState('');
  const [allPokemon, setAllPokemon] = useState([])
  const messageRef = useRef();

  const onGoing = (name) => {
    navigate(`/detail/${name}`)
  }

  const onLoadData = () => {
    setLimits(5 + data.pokemons.results.length);
    if (messageRef.current) {
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  }

  const onChange = (e) => {
    let x = e.target.value.toLowerCase()
    setSearch(x);
  }

  const { loading, data } = useQuery(GET_POKEMONS, {
    variables: {
      limit: limits,
      offset: 0,
    }
  })

  const { data: dataS } = useQuery(GET_POKEMONS_BY_NAME, {
    variables: {
      name : search
    }
  })

  const submitSearch = async (e) => {
    e.preventDefault();
    if (search !== "") {
      InsertValueSearch()
    } else {
      setLimits(6)
      InsertValueAll()
    }
  }

  const InsertValueAll = () => {
    if (data) {
      setAllPokemon([])
      setAllPokemon(data.pokemons.results)
    }
  }

  const InsertValueSearch = () => {
    if (dataS) {
      const heroes = [
        {
          id: dataS.pokemon.id,
          name: dataS.pokemon.name
        }
      ]
      if (heroes[0].id !== null) {
        setAllPokemon([])
        setAllPokemon(heroes)
      } else {
        setAllPokemon([])
      }
    }
  }
  
  useEffect(() => {
    dispatch(removeSpecies())
    dispatch(removePokemonByName())
    
    setLimits(6)

  },[dispatch])

  useEffect(() => {
    if (data) {
      setAllPokemon(data.pokemons.results)
    }
  }, [data]);

  return (
    <>
      <Container>
        <HomeWrapper>
          <Row>
            <NavLink to="/">Pokemon</NavLink>
            <Link to={`/list-mypokemon`}>
              <ListMyPokemon style={{textAlign: 'right'}} src={IcoList} alt='mypokemon' />
            </Link>
          </Row>
          <TitleHead>Hello, What Pokemon are you looking for?</TitleHead>
          <form onSubmit={submitSearch}>
            <SearchBar
              value={search}
              onChange={onChange}
              onKeyPress={submitSearch}
              type='text' 
              placeholder='Search by name' />
          </form>
        </HomeWrapper>
        { loading ?
          <Loader />
          : allPokemon.length > 0 ?
        <ListCard>
          { allPokemon.map((event, index) => (
            <CardPokemon
              key={index}
              name={event.name}
              onGoing={() => onGoing(event.name)}
            />
          ))}
          { allPokemon.length !== 1 ?
          <BtnWrapper ref={messageRef}>
            <BtnLoad onClick={() => onLoadData()}>Load more Shots</BtnLoad>
          </BtnWrapper>
          : undefined
        }
        </ListCard>
        : allPokemon.length === 0 ?
        <Error 
          title={'No results found'}
          text={"It seems we can’t find any results based on your search."} />
        : undefined
      }
      </Container>
    </>
  );
};

export default HomePokemon;
