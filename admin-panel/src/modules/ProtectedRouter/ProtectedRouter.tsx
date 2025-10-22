import { type FC, type ReactNode } from 'react';
import { useAuthStore } from '../../store/authStore';
import { Navigate } from 'react-router-dom';

interface IProtected {
  children: ReactNode;
}

export const ProtectedRouter: FC<IProtected> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <div>Загрузка...</div>; // или <div>Загрузка...</div>
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRouter;
