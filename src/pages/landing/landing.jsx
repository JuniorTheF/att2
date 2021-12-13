import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container"

import "./landing.css"


const Landing = () => {
	return (
		<div className="l">
			<div className="l-top">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' color='primary'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							EX-TVS
						</Typography>
						<Avatar>Ф</Avatar>
					</Toolbar>
				</AppBar>
			</Box>
			</div>
			<div className="l-body">
				<div className="l-main">
					Методические материалы для подготовки к ОГЭ/
					ЕГЭ по математике по направлению “Статистика и Теория вероятностей” 
				</div>
				<div className="l-sub">
					<div className="l-button-left">
						<Button variant="contained" size="large">
							Начать изучение материалов
						</Button>
					</div>
					<div className="l-button-right">
						<Button variant="contained" size="large">
							Войти/Зарегистрироваться для сохранения прогресса
						</Button>
					</div>
				</div>
			</div>
			
			<footer>
				<div className="l-footer">
					<div className="l-year">
						2021г-2022г
					</div>
					<div className="l-prepared">
						Проект подготовили: Бабушкин Тимофей 10Д, Федор Мартынов 10Д, Николаев Евгений 10А
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Landing;
