import React, { useEffect } from 'react';
import AppRouting from './App.routing';
import Header from 'components/Header';
import { useAppDispatch } from 'hooks/redux';
import AuthAsync from 'store/auth/authAsync';
import Notifications from 'components/Notifications';
import Footer from 'components/Footer';

const App:React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(AuthAsync.getToken());
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <AppRouting />
      </main>
      <Footer />
      <Notifications />
    </React.Fragment>
  );
}

export default App;
