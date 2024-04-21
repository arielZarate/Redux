// components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement ,incrementByAmount,decrementByAmount} from '../redux/feactures/slicesCounter';
import { RootState, AppDispatch } from '../redux/store';

function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h2>Contador</h2>
            <p>Valor del contador: {count}</p>
            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
            {/* Ejemplo de uso con un valor específico */}
            <button onClick={() => dispatch(incrementByAmount(5))}>Incrementar en 5</button>
            <button onClick={() => dispatch(decrementByAmount(5))}>Decrementar en 5</button>
        </div>
    );
}

export default Counter;
