import React from 'react';
// Blocks
import Banner from './Banner';
import SignUp from './SignUp';
import Users from './Users';

const HomePage:React.FC = () => {
  return (
    <React.Fragment>
      <Banner />
      <Users />
      <SignUp />
    </React.Fragment>
  );
}

export default HomePage;
