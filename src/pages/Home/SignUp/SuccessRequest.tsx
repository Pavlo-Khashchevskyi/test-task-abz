import React from 'react';

import classes from './styles.module.scss';

const SuccessRequest:React.FC = () => {
  return (
    <div className={[classes.successPage, 'container'].join(' ')} data-container="sign-up">
      <h2 className={classes.title}>User successfully registered</h2>
      <img src="./images/success-image.png" alt="Success" className={classes.successImg} />
    </div>
  )
}

export default SuccessRequest;
