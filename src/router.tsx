import Home from "./app/pages/home/home";
import MovieDetail from "./app/pages/movieDetail/movieDetail";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/movie/:id",
    exact: true,
    component: MovieDetail,
  }
];