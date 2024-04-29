import React, { useEffect, useState } from 'react';

const NasaImage = () => {

  const [imageUrl, setImageUrl] = useState('');

  const NasaApiKey = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {

    const fetchNasaImage = async () => {
      try {

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NasaApiKey}`);

        const data = await response.json();

        console.log('NASA API Response:', data);

        setImageUrl(data.url);
      } catch (error) {

        console.error('Error fetching NASA image:', error);
      }
    };


    fetchNasaImage();
  }, []); 
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="NASA's Picture of the Day" className="background-image" />}
    </div>
  );
};

export default NasaImage;
