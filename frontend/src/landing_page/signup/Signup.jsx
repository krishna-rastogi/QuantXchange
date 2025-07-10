import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import Snackbar from "@mui/material/Snackbar";

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [formState, setFormState] = useState(0); // 0 -> login, 1 -> register
  const [open, setOpen] = useState(false);

  const { handleRegister, handleLogin } = useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        const result = await handleLogin(username, password);
        setMessage(result);
        setOpen(true);
        setError("");
        setUsername("");
        setPassword("");
      } else if (formState === 1) {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setName("");
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ minHeight: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("https://source.unsplash.com/random?wallpapers")',
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Box sx={{ mb: 2 }}>
              <Button
                variant={formState === 0 ? "contained" : "outlined"}
                onClick={() => setFormState(0)}
                sx={{ mr: 1 }}
              >
                SIGN IN
              </Button>
              <Button
                variant={formState === 1 ? "contained" : "outlined"}
                onClick={() => setFormState(1)}
              >
                SIGN UP
              </Button>
            </Box>

            <Box
              component="form"
              noValidate
              sx={{ mt: 1, width: "100%", maxWidth: "400px" }}
            >
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  value={name}
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                value={username}
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                value={password}
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p style={{ color: "red", marginTop: "8px" }}>{error}</p>
              )}
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={message}
      />
    </ThemeProvider>
  );
}
