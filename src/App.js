import React, { useState } from 'react';

function LandingPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  function handleLogin(username, password) {
   
    setLoggedIn(true);
    setUserName(username);
  }

  function handleLogout() {
   
  
    setLoggedIn(false);
    setUserName('');
  }

  return (
    <div>
      {loggedIn ? (
        <p>Welcome back, {userName}!</p>
      ) : (
        <div>
          <p>Welcome, guest user!</p>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}

      {loggedIn && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LandingPage;
