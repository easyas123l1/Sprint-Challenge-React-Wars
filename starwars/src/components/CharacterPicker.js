import React, {useState, useEffect} from "react";
import Character from './Character';
import styled from 'styled-components';
import axios from 'axios';

function CharacterPicker() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // let arr = [];
    // for (let i = 1; i < 89; i++) {
      // if (i !== 17) {
        axios.get(`https://swapi.co/api/people/1/`)
        .then(result => {
          // arr.push(result.data);
          console.log(result.data);
          setData(result.data);
        })
        .catch(error => {
          console.log(error);
        })
      // }
    // }
  }, [])

  return (
    <div>
      <Character data={data} />
      {/* {
      data.map((e, i) => { */}
        {/* return ( */}
          {/* <Character data={data} /> */}
          {/* ) */}
      {/* })
      } */}
    </div>
  )
}

export default CharacterPicker;