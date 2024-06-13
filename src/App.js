import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Navbar from "../src/components/Navbar";
import Navbar2 from "../src/components/Navbar2";
import Report from "../src/components/Report";
import Attendance from "../src/components/Attendance";
import Heltin from "../src/components/Heltin";
import Finaltest from "../src/components/Finaltest";
import Revisiontest from "../src/components/Revisiontest";
import Test from "./components/Test";
import Changepass from "./components/Changepass";
import Introduction from "./components/Introduction";
import Faq from "./components/Faq";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./components/AuthContext";
import PrivateRoute from "./Protected";

function App({ navigation }) {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log(isAuthenticated);
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      console.log("token is available");
      setToken(savedToken);
    } else {
      console.log("token isnt  available");
      setToken(null);
    }
  }, [token, navigation, isAuthenticated]);

  return (
    <Router>
      {token ? <Navbar onLogout={logout} /> : <Navbar2 />}
      {/* <Navbar onLogout={logout} /> */}
      <Routes>
        <Route
          
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login onLogin={login} />} />

        <Route
          path="/report"
          element={
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <PrivateRoute>
              <Attendance />
            </PrivateRoute>
          }
        />
        <Route 
        path="/heltin" 
        element={  
        <PrivateRoute>
          <Heltin />
          </PrivateRoute>
        } 
        />
        <Route path="/finaltest" element={<Finaltest />} />
        <Route path="/revisiontest" element={<Revisiontest />} />
        <Route path="/test" element={<Test />} />
        <Route path="/changepass" element={<Changepass />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
