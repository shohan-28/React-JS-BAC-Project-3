import { createBrowserRouter } from "react-router";

import Root from "./Root";
import About from './Component/AboutSection/About';
import App from './App';
import Blog from "./BlogSection/Blog";
import Contact from "./ContactSection/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element: <App></App>
            },
            {
                path:"/About",
                element: <About></About>
            },
            {
                path: "/Blog",
                element: <Blog></Blog>
            },
            {
                path: "/Contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;