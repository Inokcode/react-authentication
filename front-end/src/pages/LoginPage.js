import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useQueryParams } from '../util/useQueryParams';

//
const LoginPage = () => {
  const [token, setToken] = useToken();
  //
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const history = useHistory();
  //oAuth code start
  const [googleOauthUrl, setGoogleOauthUrl] = useState('');
  const { token: oauthToken } = useQueryParams();

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      history.push('/');
    }
  }, [oauthToken, setToken, history]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get('/auth/google/url');
        const { url } = response.data;
        setGoogleOauthUrl(url);
      } catch (e) {
        console.log(e);
      }
    };
    loadOauthUrl();
  }, []);
  //oAuth code end
  const onLogInClicked = async () => {
    // alert('Log in not implemented yet');
    const response = await axios.post('/api/login', {
      email: emailValue,
      password: passwordValue,
    });
    const { token } = response.data;
    setToken(token);
    history.push('/');
  };
  //
  return (
    <div className="content-container">
      <h1>Log In</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input
        placeholder="someone@gmail.com"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <hr />
      <button onClick={onLogInClicked} disabled={!emailValue || !passwordValue}>
        Log In
      </button>
      <button onClick={() => history.push('/forgot-password')}>
        Forgot your password?
      </button>
      <button onClick={() => history.push('/signup')}>
        Don't have an account? Sign Up
      </button>
      <button
        disabled={!googleOauthUrl}
        onClick={() => {
          window.location.href = googleOauthUrl;
          // window.open(googleOauthUrl, '_blank');
        }}
      >
        Log in with Google
      </button>
    </div>
  );
};

export default LoginPage;
