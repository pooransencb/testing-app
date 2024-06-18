import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./screens/Home/Home";
import Info from "./screens/Info/Info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/info",
    element: <Info/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
