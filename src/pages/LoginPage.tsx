import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage: React.FC = () => {
  return (
    <div>
      <AuthForm isLogin={true} />
    </div>
  );
};

export default LoginPage;
