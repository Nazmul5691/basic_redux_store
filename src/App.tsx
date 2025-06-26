
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";



function App() {

  const dispatch = useAppDispatch();
  // const {count} = useSelector((state : RootState) => state.counter)
  const { count } = useAppSelector((state) => state.counter)


  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  }
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  }

  return (
    <>
      <h1 className="text-blue-600 font-bold text-4xl">Counter</h1>

      <button onClick={() => handleIncrement(5)} className="px-3 py-1 bg-gray-300 rounded mr-2 mt-4">Increment by 5</button>
      <button onClick={() => handleIncrement(1)} className="px-3 py-1 bg-gray-300 rounded mr-2 mt-4">Increment 1</button>
      <button className="px-3 py-1 bg-gray-100 rounded mr-2 ">{count}</button>
      <button onClick={() => handleDecrement(5)} className="px-3 py-1 bg-gray-300 rounded ">Decrement by 5</button>
      <button onClick={() => handleDecrement(1)} className="px-3 py-1 bg-gray-300 rounded ">Decrement 1</button>
      {/* <button onClick={() => dispatch(decrement(5))} className="px-3 py-1 bg-gray-300 rounded ">Decrement 5</button> */}

    </>
  )
}

export default App
