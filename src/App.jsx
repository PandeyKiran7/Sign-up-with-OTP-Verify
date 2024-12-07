import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import EmailInput from "./pages/EmailInput/EmailInput";
import VerifyOTP from "./components/OTPVerification/OTPVerification";
import NextForm from "./pages/EmployeeForm/EmployeeForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/email-input" element={<EmailInput />} /> 
        <Route path = "/verify-otp" element = {<VerifyOTP/>} />
         <Route path="/next-form" element={<NextForm />} />
      </Routes>
    </Router>
  );
}

export default App;
