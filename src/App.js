import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [simpsonData, setSimpsonData] = React.useState({
    character: "", image: "", quote: ""
  })
  const getSimpsonQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpsonData(data[0]);
      });
  };
  return (
    <div className="App">
      <h1>Simpsons quotes</h1>
      <button onClick={getSimpsonQuote} >generate</button>
      <h3>{simpsonData.character}</h3>
      <img src={simpsonData.image} />
      <p>{simpsonData.quote}</p>
    </div>
  );
}

export default App;
