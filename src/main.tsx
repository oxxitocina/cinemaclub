import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./app/store.tsx";
import { Provider } from "react-redux/es/exports";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import MoviePage from "./pages/MoviePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <MainPage/>
      },
      {
        path: 'movies',
        element: <MoviesPage/>
      },
      {
        path: 'movie/:movieID',
        element: <MoviePage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
