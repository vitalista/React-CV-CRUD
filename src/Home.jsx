import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalStyle, Card } from "./GlobalStyles";

import Table from "./Components/Table/Table";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddCV from "./Components/CV/AddCV";
import SkeletonLoader from "./Components/Loader/SkeletonLoader";

const HomeDiv = styled.div`
  display: flex;
  width: 100%;
`;
function Home() {
  const path = window.location.pathname;

  return (
    <HomeDiv>
      <GlobalStyle />
      <Sidebar />
      <Card>
        {path === "/cv/list" && (
          <>
           <div className="flex end">
           <Link to="/cv/add">Create</Link>
           </div>
            <Table />
          </>
        )}
        {path === "/cv/add" && <AddCV />}
        {path === "/cv/edit" && <EditCV />}
        {path === "/home" && <SkeletonLoader/>}
      </Card>
    </HomeDiv>
  );
}

export default Home;
