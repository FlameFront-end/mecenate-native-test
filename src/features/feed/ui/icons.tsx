import Svg, { Path } from 'react-native-svg';

import { tokens } from '@/shared/config/tokens';

export function HeartIcon({ active = false }: { active?: boolean }) {
  return (
    <Svg width={15} height={15} viewBox="0 0 24 24" fill={active ? '#ffffff' : 'none'}>
      <Path
        d="M12 20.4s-7.2-4.5-9.4-8.8C.8 8.2 2.7 4.7 6.2 4.4c2-.2 3.7.8 4.8 2.3 1.1-1.5 2.8-2.5 4.8-2.3 3.5.3 5.4 3.8 3.6 7.2C19.2 15.9 12 20.4 12 20.4Z"
        stroke={active ? '#ffffff' : '#8a99aa'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CommentIcon() {
  return (
    <Svg width={15} height={15} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 11.5a7.6 7.6 0 0 1-7.9 7.5H8.6L3 21l1.6-4.4A7.2 7.2 0 0 1 3 11.5 7.6 7.6 0 0 1 10.9 4h2.2A7.6 7.6 0 0 1 21 11.5Z"
        fill={tokens.color.icon}
      />
    </Svg>
  );
}
