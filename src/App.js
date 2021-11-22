import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setminus, setplus } from "./redux/actions/mathActions";
import { FaPlus, FaMinus } from "react-icons/fa";
function App() {
  const [value, setValue] = useState(0)
  const reducers = useSelector((state) =>state);
  useEffect(() => {
    setValue(reducers.math.number)
    console.log("Render ne 2")
  }, [])
  console.log(reducers)
  console.log("Render ne")
  const dispath = useDispatch();

  return (
    <>
      <div className="container">
      <div>{reducers && reducers.math2 &&reducers.math2.age ? reducers.math2.age : 0}</div>
        <button
          className="btn-minus"
          onClick={() => dispath(setplus(reducers.math.number - 1))}
        >
          {" "}
          <FaMinus />
        </button>

 <div>{reducers && reducers.math.number ? reducers.math.number : 0}</div>
        <button 
          className="btn-plus"
          onClick={() => dispath(setminus(reducers.math.number + 1))}
        >
          {" "}
          <FaPlus />
        </button>
      </div>
    </>
  );
}

export default App;
