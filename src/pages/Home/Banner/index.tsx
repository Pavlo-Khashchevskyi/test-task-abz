import React from 'react';
// Hooks
import useScrollIntoView from 'hooks/useScrollIntoView';
// MUI
import { Button } from '@mui/material';
// Styles
import classes from './styles.module.scss';

const Banner:React.FC = () => {
  const { scrollTo } = useScrollIntoView();

  return (
    <div className={[classes.page, 'container'].join(' ')}>
      <div className={classes.content}>
        <h1 className={classes.title}>Test assignment for front-end developer</h1>
        <p className={classes.subtitle}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        <Button className={classes.button} variant="contained" onClick={() => scrollTo('sign-up')}>Sign up</Button>
      </div>
    </div>
  );
}

export default Banner;
