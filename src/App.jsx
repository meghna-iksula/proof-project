import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";

const router = createBrowserRouter([
  { path: "/proof-project/", element: <Home /> },
  { path: "/proof-project/article", element: <ArticlePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
