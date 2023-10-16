import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// StrictMode is really not a big deal. The only thing that it does is that during development it will render all components twice in order to find certain bugs. And also React will check if we're using outdated parts of the React API.

// React before 18
// React.render(<App />, document.getElementById("root"));
