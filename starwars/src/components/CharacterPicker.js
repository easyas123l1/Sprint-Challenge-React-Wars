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
    let arr = []
    let tempData = [];
    async function apple() {
      try {
        let tryaxios = await axios.get(`https://swapi.co/api/people/`)
        arr.push(tryaxios.data.results);
        for (let i = 0; i < arr[0].length; i++) {
          tempData.push(arr[0][i]);
        }
        while (tryaxios.data.next) {  
          arr = [];
          tryaxios = await axios.get(tryaxios.data.next) 
          arr.push(tryaxios.data.results);
          for (let i = 0; i < arr[0].length; i++) {
            tempData.push(arr[0][i]);
          }
        }
        if (!tryaxios.data.next) {
          setData(tempData);
        }
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
        console.log(e);
        return (
        <Character key={i} data={e} />
        )
      })}
    </DivContainer>
  )
}

export default CharacterPicker;