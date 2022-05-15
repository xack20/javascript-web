import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import base64 from "react-native-base64";

import { notification } from "antd";

import { login } from "../../Services/Auth";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import logo from "../../Resources/Logo/favicon.png";

import './SignIn.css';
import red from "@material-ui/core/colors/grey";



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      All Right Reserved | Designed by {"Shaery and Ayesha"}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    }
  },
});

export default function SignIn() {
  const histroy = useHistory();

  useEffect(() => {
    if (window.localStorage.getItem("_tkn_")) {
      histroy.push("/");
    }
  }, [histroy]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      const res = await login({
        username: data.get("username"),
        password: data.get("password"),
      });
      window.localStorage.clear();

      window.localStorage.setItem("_uid_", res.data.userid);
      window.localStorage.setItem("_usnm_", base64.encode(res.data.username));
      window.localStorage.setItem("_usrl_", base64.encode(res.data.roles[0]));

      window.localStorage.setItem("_tkn_", res.data.token);
      window.localStorage.setItem("_rftkn_", res.data.refreshToken);

      notification.success({
        message: `Welcome ${res.data.username}`,
        description: "Successfully Logged In",
        placement: "bottomRight",
      });


      histroy.push("/");
    } catch (error) {
      if(error.response.status === 400){
        notification.error({
          message: "Credentials Error",
          description: "Invalid Username or Password",
          placement: "bottomRight",
        });
      }
      else{
        notification.error({
          message: "Server Error",
          description: "Something went wrong",
          placement: "bottomRight",
        });
      }

    }
  };

  return (
  
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm" className="trans">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fafafa",
          padding: "30px",
        }}
      >
        <img src={logo} alt="Semicolon Logo" className="logoSignIn" />
        {/* <Typography component="h1" variant="h5">
          Sign in
        </Typography> */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username "
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Sign in
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  );
}
