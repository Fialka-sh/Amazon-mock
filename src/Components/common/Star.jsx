import React, { useEffect, useState } from 'react';

export default function Star({ rating }) {
  const [stars, setStars] = useState('');

  useEffect(() => {
    let tempStars = '';
    for (let i = 0; i < rating; i++) {
      tempStars += '🌟';
    }
    setStars(tempStars);
  }, [rating]);

  return (
    <div>
      <span role="img" aria-label="star">
        {stars}
      </span>
    </div>
  );
}
