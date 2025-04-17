import React from "react";
import styled from "styled-components";
import { Link, useParams, Navigate, useLocation } from "react-router-dom";
import { GlobalStyle, Card } from "./GlobalStyles";

import Table from "./Components/Table/Table";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddCV from "./Components/CV/AddCV";
import EditCV from "./Components/CV/EditCV";
import SkeletonLoader from "./Components/Loader/SkeletonLoader";

const HomeDiv = styled.div`
  display: flex;
  width: 100%;
`;
function Home() {
  
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to="/" />;
    }

  const { id } = useParams();
  const location = useLocation(); 
  const path = location.pathname;

  const regex = /\/cv\/edit\//;
  const isCvEditPath = regex.test(path); // Check if it's the /cv/edit/:id path

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
        {isCvEditPath && <EditCV id={id} />}
        {/* {path === "/home" && <SkeletonLoader />} */}
      </Card>
    </HomeDiv>
  );
}

export default Home;
