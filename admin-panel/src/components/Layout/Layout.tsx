import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import classes from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className={classes.container}>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
