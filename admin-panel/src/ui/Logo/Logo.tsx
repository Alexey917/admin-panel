import type { FC } from 'react';
import classes from './Logo.module.css';

interface ILogo {
  classLogo?: string;
}

const Logo: FC<ILogo> = ({ classLogo }) => {
  return (
    <div
      className={`${classes.logoWrapper} ${classLogo && classes[classLogo]}`}
    >
      <a href="" className={classes.link}>
        <img
          src="https://neostudy.neoflex.ru/pluginfile.php/1/core_admin/logocompact/300x300/1755513173/logo_full.png"
          className={classes.logo}
          alt="neostudy"
        />
      </a>
      <span className={classes.logoText}>Admin</span>
    </div>
  );
};

export default Logo;
