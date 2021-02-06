import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import dummyData from '../../../dummyData.js'

const App = () => {

  const [count, setCount] = useState(0);
  const [games, setGames] = useState(dummyData.api.games);

  // useEffect(() => {
  //   axios.get('/games')
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  return (
    <div>
      Hello World
      <div>
        <p>Counter</p>
        {games}
        <button onClick={() => setCount(count+1)}>Increase</button>
      </div>
    </div>
  );
}

export default App;