import { Button, TextField, Box } from "@mui/material";
import { Fragment, useState, ChangeEvent } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function FormCreate() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    salary: "",
    pictureUrl: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateEmployee = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/Employee", formData);
      console.log(response.data);
      toast.success("Employee deleted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 700);
      // Handle the response, e.g., show a success message or update the UI
    } catch (error) {
      // Handle errors and show an error message
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          multiline
          maxRows={4}
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          id="outlined-textarea"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Placeholder"
          multiline
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          id="outlined-textarea"
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleInputChange}
          placeholder="Placeholder"
          multiline
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          id="outlined-textarea"
          label="Salary"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
          placeholder="Placeholder"
          multiline
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          id="outlined-textarea"
          label="PictureUrl"
          name="pictureUrl"
          value={formData.pictureUrl}
          onChange={handleInputChange}
          placeholder="Placeholder"
          multiline
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        size="medium"
        onClick={handleCreateEmployee}
        sx={{ marginBottom: 2 }}
      >
        Create
      </Button>
      <ToastContainer />
    </Fragment>
  );
}
