import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./app/store.tsx";
import { Provider } from "react-redux/es/exports";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import MoviesPage from "./pages/MoviesPage/MoviesPage.tsx";
import MoviePage from "./pages/MoviePage/MoviePage.tsx";
import Login from "./components/Login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "movie/:movieID",
        element: <MoviePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
