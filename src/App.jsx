import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Todo from "./pages/Todo"
import Github from "./pages/Github"

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/todo",
      element: <Todo />
    },
    {
      path: "/github",
      element: <Github />
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
