import React, { useEffect } from 'react';
import { useSecurityStore } from '../security.store';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../types/global.types';


const LogoutScreen: React.VFC = () => {
  const logout = useSecurityStore((state) => state.logout);
  const navigate = useNavigate();

  useEffect(() => {
    logout().then(() => navigate(Paths.login));
  }, [logout, navigate]);

  return null;
};

export default LogoutScreen;
