// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "./feactures/slicesCounter";

export const store = configureStore({
  reducer: {
    //agregamos el slices
    counter: counterSlices,
  },
});
