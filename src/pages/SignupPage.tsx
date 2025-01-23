import React from 'react';
import AuthForm from '../components/AuthForm';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <AuthForm isLogin={false} />
    </div>
  );
};

export default SignUpPage;
