import React from 'react';
import './Star.scss';

import StarImage from '../../data/images/stars/star-1.png';

export const Star: React.FC = () => {
  return (
    <div className="Star">
      <img src={StarImage} alt="Star"></img>
    </div>
  );
}
