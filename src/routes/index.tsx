import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components";
import { useHooks } from "hooks";
import { privateRoutes, publicRoutes } from "./data";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import NotFound from "pages/notFound";
import useStore from "store";
import Loading from "components/loading";

const RoutesWrapper = () => {
  const { get } = useHooks();
  const {
    auth: { isLoggedIn },
  } = useStore((state) => state);

  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Private protected routes */}
          {privateRoutes.length > 0 &&
            privateRoutes.map((route, idx) => {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={
                    <Suspense
                      fallback={
                        <div className="flex justify-center items-center mt-10">
                          <Loading />
                        </div>
                      }
                    >
                      <PrivateRoute children={route.element} />
                    </Suspense>
                  }
                >
                  {get(route, "inner")?.map((innerRoute, innerKey) => (
                    <Route
                      key={innerKey}
                      path={innerRoute.path}
                      element={
                        <Suspense
                          fallback={
                            <div className="flex justify-center items-center mt-10">
                              <Loading />
                            </div>
                          }
                        >
                          {innerRoute.element}
                        </Suspense>
                      }
                    />
                  ))}
                </Route>
              );
            })}

          {/* Public routes */}
          {publicRoutes.length > 0 &&
            publicRoutes.map((route, idx) => {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={
                    <Suspense
                      fallback={
                        <div className="flex justify-center items-center mt-10">
                          <Loading />
                        </div>
                      }
                    >
                      <PublicRoute children={route.element} />
                    </Suspense>
                  }
                >
                  {get(route, "inner")?.map((innerRoute, innerKey) => (
                    <Route
                      key={innerKey}
                      path={innerRoute.path}
                      element={
                        <Suspense
                          fallback={
                            <div className="flex justify-center items-center mt-10">
                              <Loading />
                            </div>
                          }
                        >
                          {innerRoute.element}
                        </Suspense>
                      }
                    />
                  ))}
                </Route>
              );
            })}
        </Route>
        <Route
          path={"/login"}
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center mt-10">
                  <Loading />
                </div>
              }
            >
              {/* <PublicRoute children={<Login />} /> */}
            </Suspense>
          }
        />
        <Route
          path={"*"}
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center mt-10">
                  <Loading />
                </div>
              }
            >
              <PrivateRoute
                children={
                  <>
                    {/* <NotFound />{" "} */}
                    "jinni qo'y"
                  </>
                }
              />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default RoutesWrapper;
