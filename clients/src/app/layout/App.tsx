import { useState, useEffect, Fragment } from "react";
import { Employee } from "../models/employee";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";
import FormCreate from "../../features/catalog/FormCreate";
function App() {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/Employee")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setEmployeeList(data))
      .catch((error) => console.error("Error fetching employee data:", error));
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <FormCreate/>
        <Catalog employee={employeeList} />
      </Container>
    </Fragment>
  );
}

export default App;
