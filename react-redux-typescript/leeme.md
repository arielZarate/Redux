- Instalar Redux en un proyecto Next.js es un proceso que implica algunos pasos para asegurarte de que todo esté configurado correctamente para manejar el estado global de tu aplicación. A continuación, te guiaré a través de los pasos para instalar Redux junto con Redux Toolkit, que es la forma recomendada de configurar Redux debido a su simplicidad y menor boilerplate.

### Paso 1: Crear un proyecto Next.js

Si aún no tienes un proyecto Next.js, puedes comenzar creando uno con el siguiente comando:

- npx create-next-app@latest mi-proyecto-next
- cd mi-proyecto-next

### Paso 2: Instalar las dependencias necesarias

Necesitarás instalar Redux Toolkit y React-Redux. Redux Toolkit simplifica la configuración de Redux, y React-Redux permite conectar tus componentes React con el store de Redux.

Ejecuta el siguiente comando para instalar ambas dependencias:

- npm install @reduxjs/toolkit react-redux

### Paso 3: Configurar la store de Redux

Configurar la store con TypeScript
Primero, vamos a definir nuestra store utilizando TypeScript. Esto implica definir el tipo del estado global y cualquier middleware que puedas querer usar. Para un proyecto básico, el middleware predeterminado es suficiente.

// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
reducer: {
counter: counterReducer,
},
});

// Inferir el `RootState` y `AppDispatch` tipos del store mismo
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

### Paso 4: Proporcionar el store a tu aplicación

Para que tu aplicación pueda acceder al store de Redux, debes usar el Provider que React-Redux ofrece, envolviendo tu aplicación en este componente en \_app.js o \_app.tsx.

// pages/\_app.js
import { Provider } from 'react-redux'
import { store } from '../src/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
return (
<Provider store={store}>
<Component {...pageProps} />
</Provider>
)
}

export default MyApp

### Paso 5: Usar Redux en tu aplicación

Con tu store configurado y proporcionado a tu aplicación, ahora puedes empezar a usar Redux. Esto implica crear slices con Redux Toolkit para manejar partes específicas del estado de la aplicación y utilizar hooks como useSelector para leer el estado y useDispatch para despachar acciones.

Ejemplo: Creando un slice de Redux y TYPESCRIPT
// src/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

#### Agregar el reducer al store

No olvides agregar tu reducer al store:

// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'

export const store = configureStore({
reducer: {
counter: counterReducer,
},
})

Con estos pasos, tendrás Redux configurado en tu aplicación Next.js. Puedes comenzar a definir más slices según sea necesario y utilizarlos en tus componentes para manejar el estado global de tu aplicación de manera eficiente.

### Creando un Componente Counter

Primero, asegúrate de tener el slice counter que definimos en el paso anterior. Ahora, vamos a crear un componente llamado Counter.js (o Counter.tsx si estás usando TypeScript) que se conectará con nuestro store de Redux para leer y actualizar el estado del contador.

// components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../src/slices/counterSlice';
import { RootState, AppDispatch } from '../src/store';

function Counter() {
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch<AppDispatch>();

return (

<div>
<h2>Contador</h2>
<p>Valor del contador: {count}</p>
<button onClick={() => dispatch(increment())}>Incrementar</button>
<button onClick={() => dispatch(decrement())}>Decrementar</button>
{/_ Ejemplo de uso con un valor específico _/}
<button onClick={() => dispatch(incrementByAmount(5))}>Incrementar en 5</button>
</div>
);
}

export default Counter;

- Este componente realiza lo siguiente:

useSelector: Se utiliza para acceder al valor actual del contador desde el estado global. useSelector toma una función que extrae la parte específica del estado que necesitas. En este caso, estamos accediendo a state.counter.value.
useDispatch: Se utiliza para despachar acciones que modifican el estado. En este ejemplo, despachamos las acciones increment y decrement que definimos en nuestro counterSlice.

En este ejemplo, RootState y AppDispatch se importan desde store.ts. RootState se usa con useSelector para asegurarse de que el estado accedido esté tipado correctamente, y AppDispatch se usa con useDispatch para tipar las acciones despachadas.
