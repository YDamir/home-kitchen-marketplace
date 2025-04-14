import React, { useState } from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" value={email} onChange={setEmail} />
        <Input type="password" placeholder="Password" value={password} onChange={setPassword} />
        <Button label="Login" onClick={() => {}} />
      </form>
    </div>
  );
};

export default Login;