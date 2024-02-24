import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Notes from "./components/Notes/Notes";
import NewNote from "./components/NewNote/NewNote";

import "./App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <Profile />
        <SideBar />
      </div>
      <div className="right">
        <Notes />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/new/note",
    element: <NewNote />,
  },
  {
    path: "/note/:id",
    element: <div>404 not found</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/404",
    element: <div>404 not found</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
