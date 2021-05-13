import "./App.css";

import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch } from "react-redux";
import { changeWidth } from "./Redux/CommonSlice";
import { BrowserRouter } from "react-router-dom";

import HeaderMain from "./Containers/Header/HeaderMain.jsx";
import SiderDrawer from "./Containers/SiderDrawer/SiderDrawer.jsx";
import MainContent from "./Containers/MainContent/MainContent.jsx";
// import LoadSpin from './Components/Spinner/LoadSpin.jsx';

// const HeaderMain = React.lazy(() =>
//   import('./Containers/Header/HeaderMain.jsx')
// );
// const SiderDrawer = React.lazy(() =>
//   import('./Containers/SiderDrawer/SiderDrawer.jsx')
// );
// const MainLayout = React.lazy(() =>
//   import('./Containers/MainLayout/MainLayout.jsx')
// );

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Loding done");
    window.addEventListener("resize", () => {
      dispatch(changeWidth(window.innerWidth));
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout
        style={{ backgroundColor: "#fafafa", height: "100vh" }}
        width={100}
      >
        <HeaderMain />
        <SiderDrawer />
        <MainContent />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
