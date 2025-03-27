import React from "react";
import { GlobalStyle, Card } from "./GlobalStyles";
import styled from "styled-components";
import Table from "./Components/Table/Table";
import Sidebar from "./Components/Sidebar/Sidebar";

const HomeDiv = styled.div`
  display: flex;
  width: 100%;
`;
function Home() {
  return (
    <HomeDiv>
      <GlobalStyle />
      <Sidebar />
      <Card>
        <h3>CV List</h3>
        <Table></Table>
      </Card>
    </HomeDiv>
  );
}

export default Home;
