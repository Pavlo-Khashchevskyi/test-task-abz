import React from 'react';
// Hooks
import useScrollIntoView from 'hooks/useScrollIntoView';
// MUI
import { Button } from '@mui/material';
// Styles
import classes from './styles.module.scss';

const Header:React.FC = () => {
  const { scrollTo } = useScrollIntoView();
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) };

  return (
    <header className={classes.header}>
      <div className={[classes.header_content, 'container'].join(' ')}>
        <img src="/images/logo.svg" alt="testtask" className={classes.logo} onClick={scrollToTop} />
        <nav className={classes.menu}>
          <Button variant="contained" onClick={() => scrollTo('users')}>Users</Button>
          <Button variant="contained" onClick={() => scrollTo('sign-up')}>Sign up</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
