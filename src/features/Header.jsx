import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

const Header = () => {
    return (
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
    )
}

export default Header
