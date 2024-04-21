// src/slices/counterSlice.ts


//se importa un PayloadAction
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



//interfaces 
interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Ejemplo usando PayloadAction para especificar el tipo del payload
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount,decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
