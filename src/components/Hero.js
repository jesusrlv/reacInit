import React from 'react';

function Hero() {
  const backgroundStyles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background-image.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '800px', // Ajusta la altura según tus necesidades
  };

  return (
    <div className="hero" style={backgroundStyles}>
      <h1 className="hero-text">Bienvenido a Mi Sitio Web</h1>
    </div>
  );
}

export default Hero;