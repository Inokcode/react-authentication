import React from 'react';
import { useHistory } from 'react-router-dom';

const PasswordResetSuccess = () => {
  const history = useHistory();
  return (
    <div className="content-container">
      <h1>Success</h1>
      <p>
        your password has been reset,now please login with your new password.
      </p>
      <button onClick={() => history.push('/login')}>Log in</button>
    </div>
  );
};

export default PasswordResetSuccess;
