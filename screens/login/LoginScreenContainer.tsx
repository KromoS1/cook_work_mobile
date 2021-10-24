import React, {FC, memo} from 'react'
import {LoginScreen} from "./LoginScreen";
import {useAppDispatch} from "../../hooks/reactReduxHooks";
import {loginAccount} from "../../redux/reducers/StatusAppReducer";

export type ValuesLoginType = {
    email:string
    password:string
}

export const LoginScreenContainer:FC = memo(() => {

    const dispatch = useAppDispatch();
    const logIn = (email:string, password:string) => dispatch(loginAccount({email,password}));

return (
        <>
            <LoginScreen logIn={logIn}/>
        </>
    )
})
