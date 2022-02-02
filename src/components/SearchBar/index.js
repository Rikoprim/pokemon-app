import React from 'react';
import { FormSearch } from './SearchBarStyled';
 
const SearchBar = ({ value, label, name, placeholder, type, onChange, onKeyDown }) => (
  <FormSearch 
    type={type}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
)

export default SearchBar