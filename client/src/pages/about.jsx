import { createSignal } from 'solid-js'
// import './App.css'
// import { Router, Route, Routes } from "@solidjs/router";

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <button class="btn btn-primary ">about</button>
    </>
  )
}

export default App
