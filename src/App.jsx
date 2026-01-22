import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Seafood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Process from "./components/Process/Process";
import ContactUs from "./components/ContactUs/ContactUs";
import About from "./components/About/About";

const App = () => {
  // ✅ Pass an array of route objects
  const router = createBrowserRouter([
    {
      path: "/Grocify",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // default route
        { path: "about", element: <About /> },
        { path: "process", element: <Process /> },
        { path: "contact", element: <ContactUs /> },
        { path: "fruits", element: <Fruits /> },
        { path: "dairy", element: <Dairy /> },
        { path: "seafood", element: <Seafood /> },
        { path: "allproducts", element: <AllProducts /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
