import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeWidth } from "./Redux/CommonSlice";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Form from "./Views/Login/SignIn";
import MyLayout from "./Components/Layout/MyLayout";


require('dotenv').config()

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Loding done");
    window.addEventListener("resize", () => {
      dispatch(changeWidth(window.innerWidth));
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Form} />
        <Route exact path="*" component={MyLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
