import { useState } from "react";
import "./App.css";
import "./DarkApp.css";

import "./components/profile/Profile.css";
import "./components/navigationBar/NavBar.css";
import "./components/signup/SignUp.css";
import Profile from "./components/profile/Profile";
import LoginForm from "./components/login/LoginForm";
import { Navigate, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Jobs from "./components/navigationBar/Jobs";
import Employer from "./components/employers/Employer";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("Light");

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  const loggedIn = window.localStorage.setItem("isLoggedIn", true);

  const Logout = (details) => {
    console.log(details);
    setUser({ email: "", password: "" });
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "Light" ? "Dark" : "Light"));
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route
            exact
            path="/login"
            element={
              <LoginForm
                setUser={setUser}
                error={error}
                setError={setError}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Profile
                // user={user}
                // Logout={Logout}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/employer"
            element={<Employer isAuthenticated={isAuthenticated} />}
          />

          <Route
            exact
            path="/jobs"
            element={<Jobs isAuthenticated={isAuthenticated} />}
          />

          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <div className="switch">
          <label id="switch">
            {theme} Mode
            <br />
            <ReactSwitch onChange={toggleTheme} checked={theme === "Dark"} />
          </label>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
