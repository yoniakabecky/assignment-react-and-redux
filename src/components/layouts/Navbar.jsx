import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

const styles = {
	title: {
		flexGrow: 1,
	},
	refreshBtn: {
		minWidth: "2rem",
	},
};


const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={styles.title}>
					Angular 6 MatTable CRUD Example
				</Typography>
				Reload data:
				<Button color="inherit" style={styles.refreshBtn}>
					<Refresh />
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
