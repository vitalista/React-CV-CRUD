import { Link, useParams, Navigate, useLocation } from "react-router-dom";

import Table from "./Components/Table/Table";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddCV from "./Components/CV/AddCV";
import EditCV from "./Components/CV/EditCV";

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
    <div className="flex w-full">
      <Sidebar />
      <div className="card">
        {path === "/cv/list" && (
          <>
            <div className="flex justify-end">
              <Link to="/cv/add">Create</Link>
            </div>
            <Table />
          </>
        )}
        {path === "/cv/add" && <AddCV />}
        {isCvEditPath && <EditCV id={id} />}
      </div>
    </div>
  );
}

export default Home;
