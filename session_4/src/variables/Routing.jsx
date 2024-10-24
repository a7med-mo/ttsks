import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ContactUs from "../pages/ContactUs";
import SinglePostPage from "../pages/SinglePost";
import NotFond from "../components/notFond/NotFond";
import Layout from "../components/layout/Layout";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFond />,
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
                path: "/posts/:id/:title",
                element: <SinglePostPage />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
        ],
        
    },
]);