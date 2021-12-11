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
					LOREM IPSUM
				</div>
				<div className="l-sub">
					<div className="l-button-left">
						<Button>
							123
						</Button>
					</div>
					<div className="l-button-right">
						2.ldfhvgsdhgoshd;hcagrgf;sdhfg;
					</div>
				</div>
			</div>
			
			<footer>
				<div className="l-footer">
				PSHOD
				</div>
			</footer>
		</div>
	);
};

export default Landing;
