import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/feactures/slicesCounter";

function Counter() {
  // Utiliza useSelector para acceder al estado del contador
  const count = useSelector((state) => state.counter.value);

  // Utiliza useDispatch para poder despachar acciones
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor del contador: {count}</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
}

export default Counter;
