import './App.css';
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Customers from './routes/Customers';
import About from './routes/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "contato",
      element: <About />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "customers",
      element: <Customers />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
