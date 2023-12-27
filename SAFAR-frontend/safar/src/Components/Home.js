import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [responseText, setResponseText] = useState('');

  const handleRequest = async () => {
    try {
      const response = await axios.get("http://localhost:8080/APP1/hello");
      setResponseText(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseText("Error fetching data");
    }
  };

  return (
    <>
      {/* Your Carousel component */}
      
      <div>
        <button onClick={handleRequest}>hello</button>
        <h1>{responseText}</h1>
      </div>
    </>
  );
};

export default Home;
