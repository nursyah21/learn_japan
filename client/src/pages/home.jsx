import { createSignal } from 'solid-js'
// import './App.css'
// import { Router, Route, Routes } from "@solidjs/router";

function home () {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        home this is home
      </div>
      {/* <button class="btn btn-primary ">home</button> */}
    </>
  )
}

export default home
