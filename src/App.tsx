import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState();
  const onClick = async () => {
    try {
      const result = await axios(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_API_KEY}`);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <NewsList />
  );
}

export default App;
