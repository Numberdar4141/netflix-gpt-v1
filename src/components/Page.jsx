import React from "react";
import Login from "./private/Login";
import Browse from "./browse/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Page = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
  return (
    <div>
   <RouterProvider router={appRouter} />
    </div>
  );
};

export default Page;
