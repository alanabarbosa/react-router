import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    
  return (
    <div>
      Página: {location.pathname}
    </div>
  )
}

export default About
