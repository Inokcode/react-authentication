import React from 'react';
import { useHistory } from 'react-router-dom';

const PasswordResetFail = () => {
  const history = useHistory();
  return (
    <div className="content-container">
      <h1>Uh oh...</h1>
      <p>Something went wrong while trying to verify your email.</p>
      <button onClick={() => history.push('/login')}>Back to Log in</button>
    </div>
  );
};

export default PasswordResetFail;
