import React, { useRef, useEffect } from 'react';

export default function App() {
  // 2. element reference
  const pathElementRef = useRef(null);
  const pathElementRef2 = useRef(null);

  // 4. animation reference for js manipulation
  const pathAnimation = useRef(null);
  const pathAnimation2 = useRef(null);

  const isAnimated = useRef(true);

  useEffect(() => {
    console.clear();
    // 5. js animation
    pathAnimation.current = pathElementRef.current.animate(
      [
        { transform: 'translate3D(0, 0, 0)' },
        { transform: 'translate3D(-10%, -10%, 0)' },
        { transform: 'translate3D(0, 0, 0)' },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
    console.log(pathAnimation.current);
    /* setTimeout(() => {
      pathAnimation.current.playbackRate = 2;
    }, 5000); */

    pathAnimation2.current = pathElementRef2.current.animate(
      [
        { transform: 'rotate(0)' },
        { transform: 'rotate(5deg)' },
        { transform: 'rotate(0)' },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
    return () => {};
  }, []);

  return (
    /* 6. js manipulation */
    <div
      onClick={() => {
        if (isAnimated.current) {
          pathAnimation.current.pause();
          isAnimated.current = false;
        } else {
          pathAnimation.current.play();
          isAnimated.current = true;
        }
      }}
    >
      {/* 1. svg as inline */}
      <svg height="400" width="450">
        <path
          /* 3. element ref */
          ref={pathElementRef}
          id="lineAB"
          d="M 100 350 l 150 -300"
          stroke="red"
          stroke-width="3"
          fill="none"
        />
        <path
          id="lineBC"
          d="M 250 50 l 150 300"
          stroke="red"
          stroke-width="3"
          fill="none"
        />
        <path
          ref={pathElementRef2}
          d="M 175 200 l 150 0"
          stroke="green"
          stroke-width="3"
          fill="none"
        />
        <path
          d="M 100 350 q 150 -300 300 0"
          stroke="blue"
          stroke-width="5"
          fill="none"
        />
        <g stroke="black" stroke-width="3" fill="black">
          <circle id="pointA" cx="100" cy="350" r="3" />
          <circle id="pointB" cx="250" cy="50" r="3" />
          <circle id="pointC" cx="400" cy="350" r="3" />
        </g>
        <g
          font-size="30"
          font-family="sans-serif"
          fill="black"
          stroke="none"
          text-anchor="middle"
        >
          <text x="100" y="350" dx="-30">
            A
          </text>
          <text x="250" y="50" dy="-10">
            B
          </text>
          <text x="400" y="350" dx="30">
            C
          </text>
        </g>
      </svg>
    </div>
  );
}
