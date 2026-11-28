import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Page from "./Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <Page title="About" /> },
      {
        path: "newbook",
        children: [
          { path: "popular", element: <Page title="Popular Books" /> },
          {
            path: "holiday-gift-ideas",
            element: <Page title="Holiday Gift Ideas" />,
          },
          { path: "classics", element: <Page title="Classics" /> },
          { path: "see-all", element: <Page title="See All Books" /> },
          {
            path: "science-fiction",
            element: <Page title="Science Fiction" />,
          },
          { path: "manga", element: <Page title="Manga" /> },
          { path: "poetry", element: <Page title="Poetry" /> },
        ],
      },
      { path: "ebook", element: <Page title="Ebook" /> },
      { path: "contactus", element: <Page title="Contact Us" /> },
      { path: "signup", element: <Page title="Sign Up" /> },
      { path: "login", element: <Page title="Login" /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
