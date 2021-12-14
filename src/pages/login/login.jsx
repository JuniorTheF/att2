import Header from "../../features/Header";
import Footer from "../../features/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import "./login.css";
import { margin } from "@mui/system";

const Login = () => {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues({
      ...values,
      showPassword1: !values.showPassword1,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = useState({
    password1: "",
    password2: "",
    showPassword1: false,
    showPassword2: false,
  });

  return (
    <div className="log">
      <Header />

      <Box className="log-face">
        <div className="log-text-reg">Регистрация нового аккаунта</div>
        <div className="log-field">
          <div className="log-field-text">Имя пользователя</div>
          <div class="log-field-data">
            <TextField variant="outlined" fullWidth></TextField>
          </div>
        </div>
        <div className="log-field">
          <div className="log-field-text">Почта</div>
          <div class="log-field-data">
            <TextField variant="outlined" fullWidth></TextField>
          </div>
        </div>
        <div className="log-field">
          <div className="log-field-text">Пароль</div>
          <div class="log-field-data">
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword1 ? "text" : "password"}
                value={values.password1}
                onChange={handleChange("password1")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword1 ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="log-field">
          <div className="log-field-text">Подтверждение пароля</div>
          <div class="log-field-data">
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword2 ? "text" : "password"}
                value={values.password2}
                onChange={handleChange("password2")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword2 ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="log-login-title">Уже есть аккаунт?</div>
        <div className="log-button-table">
          <Button
            variant="contained"
            className="log-button"
            sx={{ fontSize: 14 }}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="contained"
            className="log-button"
            sx={{ fontSize: 14 }}
          >
            Войти
          </Button>
        </div>
      </Box>

      <Footer />
    </div>
  );
};

export default Login;
