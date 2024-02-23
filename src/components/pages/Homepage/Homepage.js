import React from "react";
import MainLayout from "../../templates/MainLayout/MainLayout";
import SplitContent from '../../organisms/SplitContent/SplitContent';
import Content from '../../molecules/Content/Content';
import Header from '../../molecules/Header/Header';


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
