import React from "react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../app/store";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Provider store={store}>
        <Outlet />
    </Provider>
  );
};

export default Root;
