import {
    Grid,

} from "@mui/material";
import { Employee } from "../../app/models/employee";
import EmployeeCard from "./EmployeeCard";
interface Props {
  employee: Employee[];
}

export default function EmployeeList({ employee }: Props) {
  return (
    
    <Grid container spacing={4}>
      {employee.map((employee) => (
        <Grid item xs={3} key={employee.id}>
             <EmployeeCard employee={employee}/>
        </Grid>
      ))}
    </Grid>
  );
}
