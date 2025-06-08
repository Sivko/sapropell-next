// CircularText.tsx
import React from 'react';

export default function TextCircly() {
  return (
    <div className="w-48 h-48 relative">
      <svg
        className="w-full h-full animate-spin-slow"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="circlePath"
          fill="none"
          d="M 10, 50
             a 40,40 0 1,1 80,0
             40,40 0 1,1 -80,0"
        />
        <text fill="currentColor" fontSize="6" fontFamily="Arial">
          <textPath href="#circlePath">
            &nbsp;натуральный компонент! натуральный компонент!
          </textPath>
        </text>
      </svg>
    </div>
  );
}