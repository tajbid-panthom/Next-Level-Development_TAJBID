// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";

import { Outlet } from "react-router";
import Navbar from "@/components/layout/Navbar";

function App() {
  // const dispatch = useAppDispatch();
  // const { count } = useAppSelector((state) => state.counter);
  // console.log(count);
  // const incrementHandler = (amount: number) => {
  //   dispatch(increment(amount));
  // };
  // const decrementHandler = () => {
  //   dispatch(decrement());
  // };
  return (
    <>
      {/* <div>
        <h1>Counter with redux</h1>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increment by 5</button>
        <p>Count: {count}</p>
        <button onClick={decrementHandler}>Decrement</button>
      </div> */}

      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
