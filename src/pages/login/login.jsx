import Header from '../../features/Header'
import Footer from '../../features/Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import "./login.css"
import { margin } from '@mui/system';

const Login = () => {
    return (
        
        <div className="log">
            <Header/>

                <Box className = "log-face">
                    <div className="log-text-reg">
                        Регистрация нового аккаунта
                    </div>
                    <div className="log-field">
                        <div className="log-field-text">
                           Имя пользователя
                       </div>
                       <div class="log-field-data">
                        <TextField variant="outlined"  fullWidth></TextField>
                        </div>
                    </div>
                    <div className="log-field">
                        <div className="log-field-text">
                           Почта
                       </div>
                       <div class="log-field-data">
                        <TextField variant="outlined"  fullWidth></TextField>
                        </div>
                    </div>
                    <div className="log-field">
                        <div className="log-field-text">
                           Пароль
                       </div>
                       <div class="log-field-data">
                        <TextField variant="outlined"  fullWidth></TextField>
                        </div>
                    </div>
                    <div className="log-field">
                        <div className="log-field-text">
                           Подтверждение пароля
                       </div>
                       <div class="log-field-data">
                        <TextField variant="outlined"  fullWidth></TextField>
                        </div>
                    </div>
                    <div className="log-login-title">Уже есть аккаунт?</div>
                    <div className="log-button-table">
                    <Button variant="contained" className="log-button" sx={{ fontSize: 14 }}>Зарегистрироваться</Button>
                    <Button variant="contained" className="log-button" sx={{ fontSize: 14 }}>Войти</Button>
                    </div>
                </Box>

            <Footer/>
        </div>

    )
}

export default Login
