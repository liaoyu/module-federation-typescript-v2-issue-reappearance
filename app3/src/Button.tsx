import * as React from 'react';

type ButtonProps = {
  size?: 'small' | 'large';
};

const Button: React.FC<ButtonProps> = ({ size }) => {
  if (size === 'large') {
    return <button>App3 Large Button</button>;
  }
  return <button>App3 Small Button</button>;
};

export default Button;
