import EmployeeList from "./EmployeeList";
import { Employee } from "../../app/models/employee";
interface Props {
    employee : Employee[];
}
export default function Catalog({employee}:Props){
    return (
        <>
            <EmployeeList employee={employee} />
        </>
    );
}