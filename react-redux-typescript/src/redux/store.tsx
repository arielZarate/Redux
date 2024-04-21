// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feactures/slicesCounter';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Inferir el `RootState` y `AppDispatch` tipos del store mismo
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
