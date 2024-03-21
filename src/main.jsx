import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary fallback="Something went wrong">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
