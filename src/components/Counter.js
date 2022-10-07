import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };
  const decHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggle());
  };
  // const incrementBy5 = () => {
  //   dispatch(counterActions.incrementBy5(5)); //{type: SOME_UNIQ_IDENTIFIER, pyload:5}
  // };

  return (
    <>
      <h2>Functional Base Component</h2>
      {show && <h4 className="stu">{counter}</h4>}
      <div>
        <button className="btn btn-primary" onClick={incHandler}>
          Increment
        </button>{" "}
        <button
          className="btn btn-primary"
          onClick={() => dispatch(counterActions.incrementBy5(5))}
        >
          Increment by 5
        </button>{" "}
        <button onClick={decHandler} className="btn btn-primary">
          Decrement
        </button>
      </div>
      <hr />
      <button className="btn btn-primary" onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </>
  );
};
export default Counter;
