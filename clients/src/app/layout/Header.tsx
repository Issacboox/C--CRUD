import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
    const appBarStyle = {
        backgroundColor: 'black',

      };
  return (
    <AppBar position="static" style={appBarStyle} sx={{mb:4}}>
      <Toolbar>
        <Typography variant="h6">Employee Management</Typography>
      </Toolbar>
    </AppBar>
  );
}
