import Header from '../../features/Header'
import Footer from '../../features/Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import "./registration.css"

function Registration() {
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword1 = () => {
        setValues({
          ...values,
          showPassword1: !values.showPassword1,
        });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    
    
    const [values, setValues] = useState({
        password1: "",
        showPassword1: false
      });
    
    return (
        <div classname = "reg">
            <Header/>

                <Box className = "reg-face">
                    <div className="reg-text-log">
                        Вход в аккаунт
                    </div>
                    <div className = "reg-field">
                        <div className = "reg-field-text">
                            Ваш логин
                        </div>
                        <div className = "reg-field-data">
                            <TextField variant="outlined"  fullWidth></TextField>
                        </div>
                    </div>
                    <div className = "reg-field">
                        <div className = "reg-field-text">
                            Ваш пароль
                        </div>
                        <div className = "reg-field-data">
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
                    <div className="reg-button-table">
                    <Button variant="contained" className="reg-button" sx={{ fontSize: 14 }}>Зарегистрироваться</Button>
                    <Button variant="contained" className="reg-button" sx={{ fontSize: 14 }}>Войти</Button>
                    </div>
                </Box>

            <Footer/>
        </div>
    )
}

export default Registration
