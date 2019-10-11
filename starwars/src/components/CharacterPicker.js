import React, {useState, useEffect} from "react";
import Character from './Character';
import styled from 'styled-components';
import axios from 'axios';

function CharacterPicker() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(result => {
      setData(result);
    })
    .catch(error => {
      console.log(error);
    })
  })

  return (
    <div>

    </div>
  )
}

export default CharacterPicker;