import CoverPage from "../pages/CoverPage";
import GettingStartedPage from "../pages/GettingStarted";
import ResourcesPage from "../pages/Resources";
import PostsPage from "../pages/PostsPage";
import { FC } from "react";

interface RouteType {
  path: string;
  name: string;
  component: FC;
}

const routes: RouteType[] = [
  { path: "/cover-page", name: "Cover", component: CoverPage },
  {
    path: "/getting-started",
    name: "Getting Started",
    component: GettingStartedPage,
  },
  { path: "/resources", name: "Resources", component: ResourcesPage },
  { path: "/posts", name: "Posts", component: PostsPage },
];

export default routes;
