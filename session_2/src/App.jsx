import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import NotFond from "./components/notFond/NotFond";
import Layout from "./components/layout/Layout";
import ContactUsForm from "./components/services/ContactUsForm";
import Emails from "./components/services/Emails";
import Locations from "./components/services/Locations";
import PhoneNumber from "./components/services/PhoneNumber";

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
                    path: "/service",
                    element: <Service />,
                    children: [
                        {
                            index: true,
                            element: <ContactUsForm />
                        },
                        {
                            path: "/service/emails",
                            element: <Emails />
                        },
                        {
                            path: "/service/locations",
                            element: <Locations />
                        },
                        {
                            path: "/service/phone-number",
                            element: <PhoneNumber />
                        },
                    ]
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
