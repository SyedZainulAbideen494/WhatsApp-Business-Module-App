import { Fragment } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Website from "./Main-Folder/webiste/website";
import Loginform from "./Main-Folder/auth/login";
import Signinform from "./Main-Folder/auth/signup";
import PasswordResetPage from "./Main-Folder/auth/forgot-password-page";
import PasswordReset from "./Main-Folder/auth/forgot-password";
import Dashboard from "./Main-Folder/Home/dashboard";
import Flows from "./Main-Folder/flows/flows";
import AddFlow from "./Main-Folder/add-flow/add-flow";
import Manageflow from "./Main-Folder/manage-flow/manageFlow";

const router = createBrowserRouter([
  { path: "/", element: <Website /> },
  { path: '/login', element: <Loginform/>},
  { path: '/signup', element: <Signinform/>},
  { path: '/reset-password/page', element: <PasswordResetPage/>},
  { path: '/reset-password:email', element: <PasswordReset/>},
  { path:'/dashboard', element: <Dashboard/>},
  { path: '/flow', element: <Flows/>},
  { path: '/add-flow', element: <AddFlow/>},
  { path: '/app/manage/:app_id', element: <Manageflow/>},
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
