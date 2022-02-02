import axios from 'axios';
import ApolloClient from "apollo-boost";

export const ApiService = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app/'
})

export const ApiDefault = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
})