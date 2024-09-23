import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => { 
  const location = useLocation();
    
    return (
      <>
       Página: {location.pathname}
      </>
    );
}

export default Home;