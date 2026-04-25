import Svg, { Circle, Ellipse, G, Line, Path } from 'react-native-svg';

export function NothingFoundIllustration() {
  return (
    <Svg width={104} height={104} viewBox="0 0 104 104" fill="none">
      <G opacity={0.96}>
        <Path
          d="M47 39c-14 1-23 12-21 25 2 12 14 19 28 17 14-1 23-11 21-25-2-12-14-18-28-17Z"
          fill="#6d6f82"
        />
        <Path
          d="M52 44c-10 1-18 9-17 18 2 9 10 14 21 13 10-1 17-8 16-17-1-10-10-15-20-14Z"
          fill="#4b4d5e"
        />
        <Path
          d="M34 62c-9 3-13 10-12 17 1 5 6 8 12 7 7-1 11-7 10-15"
          stroke="#8b63ff"
          strokeWidth={4}
          strokeLinecap="round"
        />
        <Path
          d="M61 72c8 2 17 6 24 13"
          stroke="#ff2f7f"
          strokeWidth={4}
          strokeLinecap="round"
        />
        <Ellipse cx={50} cy={35} rx={26} ry={20} fill="#c4a7ff" />
        <Path
          d="M29 36c-10 0-17 3-21 8M30 42c-11 2-18 8-22 14M31 48c-9 4-14 10-17 17M72 36c10 1 17 5 21 10M72 42c10 3 17 8 21 15M70 49c9 4 15 10 18 17"
          stroke="#ff2f7f"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <Circle cx={40} cy={32} r={5} fill="#6d6f82" />
        <Circle cx={62} cy={32} r={5} fill="#6d6f82" />
        <Circle cx={39} cy={31} r={1.8} fill="#eef2f6" />
        <Circle cx={61} cy={31} r={1.8} fill="#eef2f6" />
        <Path
          d="M48 42c3 2 7 2 10-1"
          stroke="#6d6f82"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        <Line x1={51} y1={37} x2={50} y2={42} stroke="#6d6f82" strokeWidth={2} strokeLinecap="round" />
        <Path
          d="M39 77c-6 4-8 10-5 13 3 3 10 0 14-5"
          fill="#e9ddff"
          stroke="#8b63ff"
          strokeWidth={2}
        />
        <Path
          d="M60 76c3 7 8 11 13 9 5-3 4-10-2-16"
          fill="#e9ddff"
          stroke="#8b63ff"
          strokeWidth={2}
        />
        <Circle cx={48} cy={55} r={3} fill="#c4a7ff" />
        <Circle cx={59} cy={58} r={2.5} fill="#c4a7ff" />
      </G>
    </Svg>
  );
}
