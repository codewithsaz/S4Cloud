import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { UserProvider } from "./components/Context/UserContext.jsx";
import { AuthProvider } from "./components/Context/AuthContext.jsx";
import { FileProvider } from "./components/Context/FileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <AuthProvider>
          <FileProvider>
            <App />
          </FileProvider>
        </AuthProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
