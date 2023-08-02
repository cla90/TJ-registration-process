import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Splash } from "./screens/Splash";
import { Registration } from "./screens/Registration";
import { Login } from "./screens/Login";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { ForgotPassword } from "./screens/ForgotPassword";
import { LoginFilled } from "./screens/LoginFilled";
import { ForgotPasswordScreen } from "./screens/ForgotPasswordScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";
import { ForgotPasswordWrapper } from "./screens/ForgotPasswordWrapper";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Splash />,
  },
  {
    path: "/splash",
    element: <Splash />,
  },
  {
    path: "/registration-7",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration-6",
    element: <RegistrationScreen />,
  },
  {
    path: "/forgot-password-1",
    element: <ForgotPassword />,
  },
  {
    path: "/login-filled",
    element: <LoginFilled />,
  },
  {
    path: "/forgot-password-2",
    element: <ForgotPasswordScreen />,
  },
  {
    path: "/registration",
    element: <DivWrapper />,
  },
  {
    path: "/registration-5",
    element: <Screen8 />,
  },
  {
    path: "/registration-2",
    element: <Screen9 />,
  },
  {
    path: "/registration-3",
    element: <Screen10 />,
  },
  {
    path: "/forgot-password-3",
    element: <ForgotPasswordWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
