import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Notes from "./components/Notes/Notes";
import NewNote from "./components/NewNote/NewNote";

import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

async function yohohoho() {
  const data = await axios.get("http://127.0.0.1:3000/test", {
    withCredentials: true,
  });
  console.log(data.status);
}

async function yohohoho2() {
  await axios.get("http://127.0.0.1:3000/logout", {
    withCredentials: true,
  });
}
const Temp = () => {
  return (
    <div>
      <button onClick={yohohoho}>is logged in</button>
      <button onClick={yohohoho2}>logout</button>
    </div>
  );
};

const queryClient = new QueryClient();

// TODO: put this in a separate file
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
    element: <Navigate to="/login" />,
  },
  {
    path: "/home",
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
  // TODO: remove this route this is just for testing
  {
    path: "/temp",
    element: <Temp />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
