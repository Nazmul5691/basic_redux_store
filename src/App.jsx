import { useDispatch } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";



function App() {

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>

      <h1 className="text-blue-600 font-bold text-4xl">Counter</h1>

      <button onClick={handleIncrement} className="px-3 py-1 bg-gray-300 rounded mr-2 mt-4">Increment</button>
      <button className="px-3 py-1 bg-gray-100 rounded mr-2 ">0</button>
      <button onClick={handleDecrement} className="px-3 py-1 bg-gray-300 rounded ">Decrement</button>

    </>
  )
}

export default App
