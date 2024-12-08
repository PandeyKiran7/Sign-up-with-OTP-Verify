import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import SignUP from "./pages/SignUp/SignUP";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import Layout from "./pages/Layout/Layout"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route path="/verify-email-with-otp" element={<Layout />} /> 
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
