import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "socket/connect" });
    return () => {
      dispatch({ type: "socket/disconnect" });
    };
  }, [dispatch]);

  return <></>;
}

export default App;
