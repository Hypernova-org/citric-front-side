import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from 'components/header'

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="h-full">
      {/* <Header/> */}
      <Layout>
        <Content className="bg-[#fff]">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
