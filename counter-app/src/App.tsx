import { useEffect, useState, useRef } from "react";
import { MdAdd } from 'react-icons/md';
import { AiOutlineMinus } from 'react-icons/ai';

function App() {

  // state to maintain the value of count
  const [ count, setCount ] = useState(0);

  // useRef to access the DOM button elememts.
  const incrementRef = useRef<HTMLButtonElement>(null);
  const decrementRef = useRef<HTMLButtonElement>(null);


  // useEffect triggers the call back function that updates 
  // the document title with the current count value 
  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  // Increase the count value by 1 when + buttong is clicked
  const incrementHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    setCount(count + 1);

    // Changle color of the + button
    incrementRef.current!.style.backgroundColor = "rgb(107 114 128)";

    // Reset the color of the - button
    decrementRef.current!.style.backgroundColor = "rgb(209 213 219)";
  }

  // Decrease the count value by 1 when - buttong is clicked
  const decrementHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    setCount(count - 1);

    // Changle color of the + button
    decrementRef.current!.style.backgroundColor = "rgb(107 114 128)";
    
    // Reset the color of the - button
    incrementRef.current!.style.backgroundColor = "rgb(209 213 219)";
  }

  return (
    <div className="flex flex-col justify-center items-center gap-32 h-screen text-9xl">

      <h1>{count}</h1>

      <div className="flex gap-32 text-6xl text-white">
        <button
          ref={incrementRef}
          onClick={(e) => incrementHandler(e)} 
          className="rounded-full items-center p-4 bg-gray-300">
          <MdAdd/>
        </button>
        <button
          ref={decrementRef}
          onClick={(e) => decrementHandler(e)}  
          className="rounded-full items-center p-4 bg-gray-300">
          <AiOutlineMinus/>
        </button>
      </div>

    </div>
  );
}

export default App;
