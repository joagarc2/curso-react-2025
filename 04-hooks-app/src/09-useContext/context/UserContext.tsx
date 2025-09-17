import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-mock.data";
import { users } from '../data/user-mock.data';

// interface UserContextProps {
//     children: React.ReactNode;

// }

type authStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state
    authStatus: authStatus;
    user: User | null;
    isAuthenticated: boolean;

    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<authStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        const user = users.find( user => user.id === userId);

        if(!user) {
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }

    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId');
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if(storedUserId) {
            handleLogin(+storedUserId);
        }
    }, [])

    return <UserContext value={{
        authStatus,
        user,
        isAuthenticated: authStatus === 'authenticated',
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
};
