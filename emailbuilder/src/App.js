import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import CreateNewPassword from "./pages/CreateNewPassword";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newpassword" element={<CreateNewPassword />} />
    </Routes>
  );
}

export default App;
