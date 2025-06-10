import { IAuthConfig } from '@/react-client/types';
import { useEffect } from 'react';

import { useApi } from '../api';
import { useAuthState } from './state';

export const useAuthConfig = () => {
  const { authConfig, setAuthConfig } = useAuthState();
  const { data: authConfigData, isLoading } = useApi<IAuthConfig>(
    authConfig ? null : '/auth/config'
  );

  useEffect(() => {
    if (authConfigData) {
      setAuthConfig(authConfigData);
    }
  }, [authConfigData, setAuthConfig]);

  return { authConfig, isLoading };
};
