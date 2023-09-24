import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserContextProvider from './contexts/user-context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/profile';
import Login from './components/login';
import NavBar from './components/navBar'; // Import NavBar

function PhoneFrame({ children }) {
  return (
    <div className="phone-frame">
      <div className="content">{children}</div>
    </div>
  );
}

const showNavBar = true; // Set this value as needed

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PhoneFrame>
        <App />
      </PhoneFrame>
    ),
  },
  {
    path: '/login',
    element: (
      <PhoneFrame>
       {showNavBar ? <NavBar /> : null}
        <Login />
      </PhoneFrame>
    ),
  },
  {
    path: '/profile',
    element: (
      <PhoneFrame>
        {showNavBar ? <NavBar /> : null}
        <Profile />
      </PhoneFrame>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
);
