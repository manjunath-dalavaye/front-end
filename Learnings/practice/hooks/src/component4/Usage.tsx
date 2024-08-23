import React from 'react';
import useToggle from './UseToggle';

const ToggleComponent: React.FC = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <div>This content is toggled</div>}
    </div>
  );
};

export default ToggleComponent;
