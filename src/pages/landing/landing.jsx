import Header from "../../features/Header"; 
import Footer from '../../features/Footer'
import Button from "@mui/material/Button";
import "./landing.css"




const Landing = () => {
	return (
		<div className="l">
				<Header />
			<div className="l-body">
				<div className="l-main">
					Методические материалы для подготовки к ОГЭ/ЕГЭ по математике по направлению “Статистика и Теория вероятностей” 
				</div>
				<div className="l-sub">
					<div className="l-button-left">
						<Button variant="contained" size="large">
							Начать изучение материалов
						</Button>
					</div>
					<div className="l-button-right">
						<Button variant="contained" size="large" href="../login/Login.jsx">
							Войти/Зарегистрироваться для сохранения прогресса
						</Button>
					</div>
				</div>
			</div>
			<Footer />			
		</div>
	);
};

export default Landing;
