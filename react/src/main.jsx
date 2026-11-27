import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Page from "./Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Page title="Home" /> },
      { path: "about", element: <Page title="about" /> },
      {
        path: "NewBook",
        children: [
          { path: "popular", element: <Page title="Popular Kids Books" /> },
          {
            path: "holiday-gift-ideas",
            element: <Page title="Holiday Gift Ideas for Kids" />,
          },
          { path: "classics", element: <Page title="Kids Classics" /> },
          { path: "see-all", element: <Page title="All Kids Books" /> },
          { path: "classics", element: <Page title="Fiction Classics" /> },
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
