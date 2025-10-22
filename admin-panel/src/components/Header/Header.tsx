import Logo from '../../ui/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button, ConfigProvider } from 'antd';

import classes from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    navigate('/');
    logout();
  };

  return (
    <header className={classes.header}>
      <Logo />
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: '#d62370',
              colorPrimaryHover: '#eb67a0',
              colorPrimaryActive: '#eb67a0',
              controlHeight: 35,
              borderRadius: 8,

              colorBorder: '#d9d9d9',
              colorText: '#666',
              colorBgContainer: '#fff',

              colorBorderSecondary: '#1ec0c8',
              colorTextSecondary: '#1ec0c8',
            },
          },
        }}
      >
        <Button
          type="primary"
          className={classes.signIn}
          onClick={handleLogout}
        >
          Выйти
        </Button>
      </ConfigProvider>
      {/* <button className={classes.signIn} >
        Выйти
      </button> */}
    </header>
  );
};

export default Header;
