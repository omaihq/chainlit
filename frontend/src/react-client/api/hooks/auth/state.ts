import { authState, threadHistoryState, userState } from '@/react-client';
import { useRecoilState, useSetRecoilState } from 'recoil';

export const useAuthState = () => {
  const [authConfig, setAuthConfig] = useRecoilState(authState);
  const [user, setUser] = useRecoilState(userState);
  const setThreadHistory = useSetRecoilState(threadHistoryState);

  return {
    authConfig,
    setAuthConfig,
    user,
    setUser,
    setThreadHistory
  };
};
