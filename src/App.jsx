import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import MainProtectedLayout, { loader as protector } from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Reflection from "./pages/Dashboard/Reflection";
import Post from "./pages/Dashboard/Post";
import Home from "./pages/Dashboard/Home";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import EditUser from "./pages/Dashboard/EditUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="forgot_password" element={<ForgotPassword />} />

      <Route element={<MainProtectedLayout />} loader={protector}>
        <Route path="home" element={<Home />} />
        <Route path="reflection" element={<Reflection />} />
        <Route path="post" element={<Post />} />
        <Route path="edit_user" element={<EditUser />} />

      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
