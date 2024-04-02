import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="h-full">
      <Layout>
        <Content className="bg-[#fff]">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
