import React from 'react';
import useWindowSize from './UseWindowSize';

const WindowSizeComponent: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
};

export default WindowSizeComponent;
