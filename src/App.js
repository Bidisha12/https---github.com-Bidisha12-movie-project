import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/ducks/user";
import "./App.css";

function App() {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getUser());
 }, [dispatch]);

 const userResult = useSelector((state) => state.user.user);
 console.log(userResult);
 return <div className="App"></div>;
}

export default App;
