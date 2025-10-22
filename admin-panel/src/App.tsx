import './styles/App.css';
import './styles/normalize.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRouter';
import { useState } from 'react';
import { createContext } from 'react';

export interface AuthContextType {
  auth: string;
  setAuth: (value: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  auth: '',
  setAuth: () => {},
});

function App() {
  const [auth, setAuth] = useState<string>('');

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
