import React from 'react';

function Button({ label, onClick, type = 'button' }) {
  return <button onClick={onClick} type={type}>{label}</button>;
}

export default Button;
