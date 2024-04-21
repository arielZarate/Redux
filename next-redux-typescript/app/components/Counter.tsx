'use client'
import React ,{useState}from 'react'

function Counter() {
const [counter,setCounter]=useState(0)
const avisar=()=>{
    alert('se hizo click')
}

  return (
    <div>
      <h1>Contador con nextjs y Redux y Typescript</h1>
     <p>valor del contador: {counter}</p>
      <button type="button" >Incrementar</button>
          <button type="button" >Decrementar</button>
    </div>
  )
}

export default Counter
