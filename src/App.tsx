import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

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
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly/>}
    </div>
  );
}

export default App;