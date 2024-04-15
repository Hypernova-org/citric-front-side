import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";

import Header from "components/header";
import Footer from "components/footer";

const { Content } = Layout;

const App: React.FC = () => {
  const location = useLocation();
  return (
    <Layout className="h-full">
      <Layout>
      <Header />
        <Content className="bg-[#fff]">
          <Outlet />
        </Content>
      </Layout>
      {location.pathname === "/contact" ? <div></div> : <Footer />}
    </Layout>
  );
};

export default App;
