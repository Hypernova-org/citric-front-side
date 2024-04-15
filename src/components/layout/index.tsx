import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";

import Header from "components/header";
import Footer from "components/footer";

const { Content } = Layout;

const App: React.FC = () => {
  const location = useLocation();
  const showHeaderFooter =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/catalog" ||
    location.pathname === "/contact" ||
    location.pathname.startsWith("/blog") ||
    location.pathname.startsWith("/product");
  return (
    <Layout className="h-full">
      {!showHeaderFooter ? <></> : <Header />}
      <Layout>
        <Content className="bg-[#fff]">
          <Outlet />
        </Content>
      </Layout>
      {!showHeaderFooter ? <></> : <Footer />}
    </Layout>
  );
};

export default App;
