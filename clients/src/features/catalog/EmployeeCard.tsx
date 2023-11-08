/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { Employee } from "../../app/models/employee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  position: string;
  salary: number;
  pictureUrl: string;
}

interface Props {
  employee: Employee;
}
export default function EmployeeCard({ employee }: Props) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormValues>({
    firstName: "",
    lastName: "",
    position: "",
    salary: 0,
    pictureUrl: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
    // Initialize form data with the current employee data
    setFormData({
      firstName: employee.firstName,
      lastName: employee.lastName,
      position: employee.position,
      salary: employee.salary,
      pictureUrl: employee.pictureUrl,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/Employee/${employee.id}`, formData);
      toast.success("Employee updated successfully!");
      // Close the dialog after successful update
      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 700);
    } catch (error) {
      // Handle errors and show an error message
      console.error(error);
    }
  };

  const deleteData = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/Employee/${employee.id}`);
      toast.success("Employee deleted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 700);
    } catch (error) {
      // Handle errors and show an error message
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={employee.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {employee.firstName.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={employee.firstName}
        titleTypographyProps={{
          sx: { fontWeight: "600", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain" }}
        image={employee.pictureUrl}
        title={employee.firstName}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
          {employee.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Salary : {employee.salary.toLocaleString()}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          Edit
        </Button>
        <Button size="small" onClick={deleteData}>
          Delete
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="update-dialog-title">
          <DialogTitle id="update-dialog-title">Update Employee</DialogTitle>
          <DialogContent>
            <DialogContentText>Please complete the form</DialogContentText>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleFormChange}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Salary"
                name="salary"
                value={formData.salary}
                onChange={handleFormChange}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="PictureUrl"
                name="pictureUrl"
                value={formData.pictureUrl}
                onChange={handleFormChange}
                fullWidth
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <ToastContainer />
      </CardActions>
    </Card>
  );
}
