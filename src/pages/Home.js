import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  return (
    <div>
    <h2>Welcome!</h2>
    <button onClick={() => navigate('/dashboard')}>
        Go to Product Dashboard
      </button>
  </div>
  );
}

export default Home;
