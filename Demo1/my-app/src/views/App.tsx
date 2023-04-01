import React,{useState} from "react";
import "../styles/App.css";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/signUp";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
  {
    path: "/home",
    element: <Layout></Layout>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

function App() {

  return (
    <>
      <ConfigProvider locale={enUS}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </>
  );
}

export default App;
