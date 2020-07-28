import React from 'react';
import { Planet } from './Planet';

import './Orbit.scss';

interface Props {
  index: number,
  centerX?: number,
  centerY?: number,
  height: number,
  width: number,
  rotation: number,

  planetSize: number,
  planetColor: string,
}

export const Orbit: React.FC<Props> = ({ index, centerX, centerY, height, width, rotation, planetSize, planetColor }) => {
  return (
    <div>
      <div className="Orbit" style={{ zIndex: index, height: height + "px", width: width + "px", transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}></div>
      <Planet index={index} size={planetSize} color={planetColor} orbitHeight={height} orbitWidth={width} orbitRotation={rotation} />
    </div>
  );
}
