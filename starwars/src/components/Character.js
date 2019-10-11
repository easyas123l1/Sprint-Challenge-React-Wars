import React from 'react';
import styled from 'styled-components';

const Character = props => {
  console.log('this is props', props);
  return (
    <div>
      <h3>Character Name: {props.data.name}</h3>
      <p>Mass: {props.data.mass}</p>
      <p>Height: {props.data.height}</p>
      <p>Hair Color: {props.data.hair_color}</p>
      <p>Skin Color: {props.data.skin_color}</p>
      <p>Eye Color: {props.data.eye_color}</p>
      <p>Birth Year: {props.data.birth_year}</p>
      <p>Gender: {props.data.gender}</p>
    </div>
  )
}

export default Character;