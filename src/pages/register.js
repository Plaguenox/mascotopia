import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Register from '../components/register';

const RegisterPage = ({ setUserData, setIsLoggedIn }) => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedInState} />
      <div className="register-container" style={styles.registerContainer}>
        <Register setUserData={setUserData} setIsLoggedIn={setIsLoggedInState} />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  registerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '16px',
  },
};

export default RegisterPage;
