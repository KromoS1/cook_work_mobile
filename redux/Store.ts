import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {statusAppReducer} from "./reducers/StatusAppReducer";

export const store = configureStore({
    reducer:{
        statusApp:statusAppReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
