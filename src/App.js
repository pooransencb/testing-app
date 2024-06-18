import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./screens/Home/Home";
import Info from "./screens/Info/Info";
import Slider1 from "./screens/Slider1/Slider1";
import Slider2 from "./screens/Slider2/Slider2";
import Slider3 from "./screens/Slider3/Slider3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to='/home'><button>Home</button></Link>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/slider1",
    element: <Slider1 />,
  },

  {
    path: "/slider2",
    element: <Slider2 />,
  },
  {
    path: "/slider3",
    element: <Slider3 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
