import { createContext, useState } from "react";
import api from "../pages/api/api";
import { setCookie } from 'nookies'
import Router from "next/router";

type User = {
    name: string;
    email: string;
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    account: User | null;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}){
    const [account, setUser] = useState<User | null>(null)

    const isAuthenticated = !!account;

    async function signIn({email, password}: SignInData) {
        const {data: {access_token, account}} = await api.post('/login',{
            email,
            password,
        })

        setCookie(undefined, 'olddragon-token', access_token, {
            maxAge: 60 * 60 * 1,
        })

        console.log(account, access_token)

        setUser(account)

        Router.push('/home');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, account, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}