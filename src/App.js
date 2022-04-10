import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Page from "./Components/Page";
import "./CSS/normalize.css";
import "./CSS/common.css";
import "./CSS/App.css";
import { useDispatch, useSelector } from "react-redux";
import { add, addByNum, sub } from "./Store/useCounter";


function App() {
  const {count} = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Header />
        <h1>{count}</h1>
        <button className="btn" onClick={()=>dispatch(add())}>+</button>
        <button className="btn" onClick={()=>dispatch(sub())}>-</button>
        <button className="btn" onClick={()=>dispatch(addByNum(25))}>Add By 25</button>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
