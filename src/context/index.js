import { createContext } from "react";

export const AuthContext = createContext({
    isSignedIn: false,
    setIsSignedIn: () => ({})
});

export const MyContext = createContext({
    something: false,
    setSomething: () => ({})
});