import { lazy } from "react";

const NotFound = lazy(() => import("pages/notFound"));
const Main = lazy(() => import("pages/main"));
const About = lazy(() => import("pages/about"));
const Catalog = lazy(() => import("pages/catalog"));
const Blog = lazy(() => import("pages/blog"));
const Contact = lazy(() => import("pages/contact"));

export interface IRoute {
  path: string;
  access?: string[] | "*";
  element: JSX.Element;
  inner?: IRoute[];
  index?: boolean;
  title: string;
}

const privateRoutes: IRoute[] = [

];

const publicRoutes: IRoute[] = [
  {
    path: "/",
    title: "Home page",
    element: <Main />,
  },
  {
    path: "/about",
    title: "About",
    element: <About />,
  },
  {
    path: "/catalog",
    title: "Catalog",
    element: <Catalog />,
  },
  {
    path: "/blog",
    title: "Blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    title: "Contact",
    element: <Contact />,
  },
  {
    path: "*",
    title: "",
    element: <NotFound />,
  },
];

export { privateRoutes, publicRoutes };
