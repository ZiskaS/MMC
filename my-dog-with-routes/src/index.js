import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './contexts/user-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statements
import Profile from './components/profile';
import Login from './components/login';
import NavBar from './components/navBar';

function PhoneFrame({ children }) {
  return (
    <div className="phone-frame">
      <div className="content">{children}</div>
    </div>
  );
}

const showNavBar = true; // Set this value as needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserContextProvider>
      <Routes>
        <Route
          path="/login"
          element={ // Use element to specify the component to render
            <PhoneFrame>
              {showNavBar ? <NavBar /> : null}
              <Login />
            </PhoneFrame>
          }
        />
        <Route
          path="/profile"
          element={ // Use element to specify the component to render
            <PhoneFrame>
              {showNavBar ? <NavBar /> : null}
              <Profile />
            </PhoneFrame>
          }
        />
        <Route
          path="/"
          element={ // Use element to specify the component to render
            <PhoneFrame>
              <App />
            </PhoneFrame>
          }
        />
      </Routes>
    </UserContextProvider>
  </Router>
);

