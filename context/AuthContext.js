import {createContext, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {Magic} from 'magic-sdk'
import {MAGIC_PUBLIC_KEY} from "~/utils/urls";

const AuthContext = createContext();

let magic;

export const AuthProvider = props => {
    const [user, setUser] = useState();
    const router = useRouter();

    const loginUser = async (email) => {
        try {
            await magic.auth.loginWithMagicLink({email});
            setUser({email});
            await router.push('/')
        } catch (err) {
            setUser(null);
        }
    }

    const logoutUser = async () => {
        try {
            await magic.user.logout();
            setUser(null);
            await router.push('/')
        } catch (err) {
        }
    }

    const checkUserLoggedIn = async () => {
        try {
            const isLoggedIn = await magic.user.isLoggedIn();
            if (isLoggedIn) {
                const {email} = await magic.user.getMetadata();
                setUser({email});
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        magic = new Magic(MAGIC_PUBLIC_KEY);
        checkUserLoggedIn().catch(err => {
            console.log(err)
        });
    }, [])

    return (
        <AuthContext.Provider value={{user, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
