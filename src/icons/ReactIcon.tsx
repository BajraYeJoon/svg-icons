import { createIcon } from '../components/Icon';
import React from 'react';

export const ReactIcon = createIcon(
  <>
    <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor"/>
    <path 
      d="M12 21.7C7.5 21.7 3 20.1 3 18c0-1.4 2.1-2.8 5.2-3.6-.2-.7-.3-1.4-.4-2.1-2.4-.5-4-1.4-4-2.4 0-1.4 2.1-2.8 5.2-3.6.1-.7.2-1.4.4-2.1C6.1 3.4 3 2.7 3 1.3c0-2.1 4.5-3.7 9-3.7s9 1.6 9 3.7c0 1.4-2.1 2.8-5.2 3.6.2.7.3 1.4.4 2.1 2.4.5 4 1.4 4 2.4 0 1.4-2.1 2.8-5.2 3.6-.1.7-.2 1.4-.4 2.1 3.3.8 5.2 2.2 5.2 3.6 0 2.1-4.5 3.7-9 3.7z" 
      stroke="currentColor" 
      strokeWidth="1.5"
      fill="none"
    />
  </>,
  {
    category: 'Frontend Frameworks',
    tags: ['react', 'javascript', 'framework', 'ui']
  }
);