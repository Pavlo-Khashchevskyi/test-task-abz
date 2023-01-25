import React from 'react';
// Styles
import classes from './styles.module.scss';

const Footer:React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <h3 className={classes.title}>© abz.agency specially for the test task</h3>
      </div>
    </footer>
  );
}

export default Footer;
