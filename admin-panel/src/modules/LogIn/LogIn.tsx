import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Input } from 'antd';

import classes from './Login.module.css';
import Logo from '../../ui/Logo/Logo';

const LogIn = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName === 'Alexey' && password === '123') {
      const username = login(userName);
      console.log('Username:', username);
      navigate(`/${username}`);
    } else {
      setError(true);
    }
  };

  const inputStyle = {
    width: '400px',
    height: '40px',
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div></div>
      <Logo classLogo="logoLogin" />
      <legend className={classes.legend}>Войдите в свой аккаунт</legend>

      <Input
        placeholder="Логин"
        value={userName}
        onChange={onChangeUserName}
        style={inputStyle}
      />
      <Input
        placeholder="Пароль"
        value={password}
        onChange={onChangePassword}
        style={inputStyle}
      />

      <button type="submit" className={classes.btn}>
        Войти
      </button>
      {error && (
        <span className={classes.error}>Неверный логин или пароль!</span>
      )}
      <p className={classes.text}>
        Не можете войти?{' '}
        <Link to="mailto:info@neoflex.ru" className={classes.link}>
          Напишите нам
        </Link>
      </p>
    </form>
  );
};

export default LogIn;
