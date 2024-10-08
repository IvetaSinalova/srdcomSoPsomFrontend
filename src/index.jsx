import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Canistherapy from "./components/Canistherapy";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import Offers from "./components/Offers";
import Post from "./components/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> }, // About content
      { path: "/canistherapy", element: <Canistherapy /> },
      { path: "/posts", element: <Posts /> },
      { path: "/post/:id", element: <Post /> },
      { path: "/contact", element: <Contact /> },
      { path: "/offers", element: <Offers /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
