import React from 'react';
import ImageErr from '../../assert/image/pikachu.png'
import { ErrorImage, ErrorText, ErrorTitle, ErrorWrapper } from './ErrorStyled';

const Error = (props) => {
  return (
    <ErrorWrapper>
      <ErrorImage src={ImageErr} alt='error'></ErrorImage>
      <ErrorTitle>{props.title}</ErrorTitle>
      <ErrorText>{props.text}</ErrorText>
    </ErrorWrapper>
  );
};

export default Error;
