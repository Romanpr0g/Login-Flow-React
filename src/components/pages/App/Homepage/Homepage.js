import React from "react";
import MainLayout from "../../../templates/App/MainLayout/MainLayout";
import SplitContent from "../../../organisms/App/SplitContent/SplitContent";
import Content from "../../../molecules/App/Homepage/Content/Content";
import Header from "../../../molecules/App/Homepage/Header/Header";

const Homepage = () => {
  return (
    <MainLayout>
      <Header />
      <SplitContent>
        <Content>Content</Content>
        <Content>Content 2</Content>
      </SplitContent>
    </MainLayout>
  );
};

export default Homepage;
