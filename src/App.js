import React, { useEffect } from "react";
import { increment, decrement, reset, fetchPosts } from "./store";
import { useSelector, useDispatch } from "react-redux";
import './App.css';

function App() {
  const { count, heythrer } = useSelector((state) => state.counter);
  const dispatchFun = useDispatch();
  useEffect(() => {
    dispatchFun(fetchPosts());
  }, []);
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{heythrer}</h2>
      <button onClick={() => dispatchFun(increment())}>PLUS</button>
      <button onClick={() => dispatchFun(decrement())}>MINUS</button>
      <button onClick={() => dispatchFun(reset())}>RESET</button>
    </div>
  );
}

export default App;
