import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import ComicReader from "./components/ComicReader";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Welcome },
      { path: "home", Component: Home },
      { path: "comic/:courseId/:chapterId", Component: ComicReader },
      { path: "quiz/:courseId/:chapterId", Component: Quiz },
      { path: "leaderboard", Component: Leaderboard },
      { path: "profile", Component: Profile },
    ],
  },
]);
