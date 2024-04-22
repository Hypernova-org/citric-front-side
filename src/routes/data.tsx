import BlogDetails from "pages/blogDetails";

import { lazy } from "react";

const NotFound = lazy(() => import("pages/notFound"));
const Main = lazy(() => import("pages/main"));
const About = lazy(() => import("pages/about"));
const Catalog = lazy(() => import("pages/catalog"));
const Blog = lazy(() => import("pages/blog"));
const Vacancies = lazy(() => import("pages/vacancies"));

const Contact = lazy(() => import("pages/contact"));
const ProductInner = lazy(() => import("pages/productInner"));

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
    path: "/blog/:id",
    title: "Blog",
    element: <BlogDetails />,
  },
  {
    path: "/vacancies",
    title: "Vacancies",
    element: <Vacancies />,
  },
  {
    path: "/contact",
    title: "Contact",
    element: <Contact />,
  },
  {
    path: "/product/:id",
    title: "product",
    element: <ProductInner />,
  },
  {
    path: "*",
    title: "Not found",
    element: <NotFound />,
  },
];

export { privateRoutes, publicRoutes };
