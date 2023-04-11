import React from "react";
import Home from "./pages/Home";
import '../src/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
]);
function App() {
  return <RouterProvider router={router} />
}

export default App;
