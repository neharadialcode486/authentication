import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard.tsx";
import Login from "./components/Login.tsx";
import ResetPassword from "./components/ResetPassword.tsx";
import SetPassword from "./components/SetPassword.tsx";
import SignUp from "./components/SignUp.tsx";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-lightGrey text-black dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
