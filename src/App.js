import "./App.css";
import {
  HashRouter as Router,
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
import ResultSummary from "./components/ResultSummary";
import DetailedSummary from "./components/DetailedSummary";
import Header from "./components/Header";

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
   <Header/>
     
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Login onLogin={login} />} />


        <Route
          path="/course"
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
        <Route path="/resultsummary" element={<PrivateRoute><ResultSummary /></PrivateRoute>} />

        <Route path="/revisiontest" element={<Revisiontest />} />
        <Route path="/test" element={<PrivateRoute><Test /></PrivateRoute>} />
        <Route path="/detailedsummary" element={<PrivateRoute><DetailedSummary /></PrivateRoute>} />

        <Route path="/changepass" element={<Changepass />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
