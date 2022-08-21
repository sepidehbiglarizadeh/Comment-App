import HomePage from "./components/pages/HomePage";
import FullCommentPage from "./components/pages/FullCommentPage";
import NewCommentPage from "./components/pages/NewCommentPage";
import NotFoundPage from "./components/pages/NotFoundPage";

const routes = [
  { path: "/comment/:id", component: FullCommentPage },
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", exact: true, component: HomePage },
  { path: "*", component: NotFoundPage },
];

export default routes;
