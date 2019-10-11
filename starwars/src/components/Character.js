import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  background: white;
  width: 15%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: black;
  box-shadow: 0px 1px 6px -2px grey;
  opacity: 0.7;
`;

const Header = styled.h3`
  font-size: 22px;
`;

const Paragraph = styled.p`
  text-decoration: underline;
`;



const Character = props => {
  console.log('this is props', props);
  return (
    <DivContainer>
      <Header>Character Name: {props.data.name}</Header>
      <Paragraph>Mass: {props.data.mass}</Paragraph>
      <Paragraph>Height: {props.data.height}</Paragraph>
      <Paragraph>Hair Color: {props.data.hair_color}</Paragraph>
      <Paragraph>Skin Color: {props.data.skin_color}</Paragraph>
      <Paragraph>Eye Color: {props.data.eye_color}</Paragraph>
      <Paragraph>Birth Year: {props.data.birth_year}</Paragraph>
      <Paragraph>Gender: {props.data.gender}</Paragraph>
    </DivContainer>
  )
}

export default Character;