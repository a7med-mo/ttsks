import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import ContactUs from "./pages/ContactUs";
import NotFond from "./components/notFond/NotFond";
import Layout from "./components/layout/Layout";
import SinglePost from "./pages/SinglePost";

export default function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/posts",
          element: <Posts />
        },
        {
          path: "/posts/:id",
          element: <SinglePost />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        },
      ],
      errorElement: <NotFond />,
    },
  ]);


  return <RouterProvider router={routes} />
}


