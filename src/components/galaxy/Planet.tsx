import React from 'react';
import './Planet.scss';
import styled, { keyframes } from "styled-components";

interface Props {
  index: number,
  name?: string,
  size: number,
  color: string,
  orbitHeight: number,
  orbitWidth: number,
  orbitRotation: number
}

export const Planet: React.FC<Props> = ({ index, size = 20, color = "yellow", orbitHeight = 100, orbitWidth = 200, orbitRotation = 0 }) => {
  const radiusHeight: number = orbitHeight / 2;
  const radiusWidth: number = orbitWidth / 2;

  // Gravity
  const gravityX = keyframes`to { transform: translateX(${radiusWidth}px); }`;
  const GravityX = styled.div`
    margin-left: ${-radiusHeight}px;
    animation: ${gravityX} 4s infinite ease-in-out alternate;
    animation-delay: ${-index}s;
  `;
  const gravityY = keyframes`to { transform: rotate(1turn); }`;
  const GravityY = styled.div`
    margin-left: ${-radiusHeight}px;
    transform-origin: ${radiusHeight}px center;
    position: absolute;
    animation: ${gravityY} 8s infinite linear;
    animation-delay: ${-index}s;
  `;

  return (
    <div className="Planet" style={{ zIndex: 100 + index, transform: `rotate(${orbitRotation}deg)` }}>
      <GravityX className="gravity-x">
        <GravityY className="gravity-y">
          <div style={{ width: size + "px", height: size + "px", backgroundColor: color }}></div>
        </GravityY>
      </GravityX>
    </div>
  );
}
