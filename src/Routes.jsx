import { createBrowserRouter } from "react-router";

import Root from "./Root";
import About from './Component/AboutSection/About';
import App from './App';

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
        ]
    }
])

export default router;