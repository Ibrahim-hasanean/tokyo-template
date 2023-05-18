import { FC, useState, createContext } from 'react';
import { signIn } from 'src/fakeData/fakeData';
import { IUser, PagesRoutes, Role } from 'src/models/common';
import { useNavigate } from 'react-router-dom';
import routes from 'src/router';
import { toast } from 'react-toastify';
type AuthContext = {
  isAuthenticated: boolean;
  user?: any;
  userRole?: any;
  setAuthData: ({ user, isAuthenticated }: AuthContext) => void;
  login: (userName: string, password: string) => void;
  error: string;
  loading: boolean;
};

type ISetAuthenticated = {
  isAuthenticated: boolean;
  user?: any;
  userRole?: any;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [userRole, setUserRole] = useState<Role>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const login = (userName: string, password: string) => {
    setLoading(true);
    const user = signIn(userName, password);
    setTimeout(() => {
      if (!user) {
        setAuthData({ isAuthenticated: false });
        setError('invalid email or password');
        toast.error('invalid email or password');
      } else {
        setAuthData({ user, isAuthenticated: true, userRole: user.role });
        navigate(PagesRoutes.dashboards.path);
        setError(undefined);
      }
      setLoading(false);
    }, 3000);
    return;
  };

  const setAuthData = ({
    user,
    isAuthenticated,
    userRole
  }: ISetAuthenticated) => {
    if (isAuthenticated) {
      setUser(user);
      setIsAuthenticated(isAuthenticated);
      setUserRole(userRole);
    } else {
      setUser(undefined);
      setIsAuthenticated(false);
      setUserRole(undefined);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        setAuthData,
        userRole,
        login,
        error,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
