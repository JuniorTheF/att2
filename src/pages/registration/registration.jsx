import Header from '../../features/Header'
import Footer from '../../features/Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./registration.css"

function registration() {
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
                            <TextField variant="outlined"  fullWidth></TextField>
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

export default registration
