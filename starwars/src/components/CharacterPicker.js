import React, {useState, useEffect} from "react";
import Character from './Character';
import styled from 'styled-components';
import axios from 'axios';

const DivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function CharacterPicker() {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    async function apple() {
      try {
        const tryaxios = await axios.get(`https://swapi.co/api/people/`)
        console.log(tryaxios);
        setData(tryaxios.data.results);
      }
      catch(error) {
        console.log(error);
      }
    } 
    apple();
  }, [])

  return (
    <DivContainer>
        {
      data.map((e, i) => {
        return (
        <Character key={i} data={e} />
        )
      })}
    </DivContainer>
  )
}

export default CharacterPicker;