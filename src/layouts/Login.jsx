import {
	Typography,
	Card,
	CardContent,
	makeStyles,
	TextField,
	CardActions,
	Button,
	Link,
	Grid,
	Avatar,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React from "react";

export default function Login() {
	const useStyles = makeStyles((theme) => ({
		container: {
			height: "50%",
			width: "30%",
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
			margin: "auto",
			marginTop: theme.spacing(3),
			padding: theme.spacing(3),
			"-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
			boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
		},
		content: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.primary.main,
		},
		title: {
			color: "#333",
		},
		text: {
			color: "#555",
			marginBottom: theme.spacing(3),
		},
		input: {
			width: "100%",
			padding: theme.spacing(1),
		},
		link: {
			color: "#555",
		},
		button: {
			width: "100%",
			backgroundColor: theme.palette.primary.main,
			color: "white",
			marginBottom: theme.spacing(1),
		},
	}));

	const classes = useStyles();
	return (
		<Card className={classes.container}>
			<CardContent className={classes.content}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5" className={classes.title}>
					Log In
				</Typography>
				<Typography className={classes.text}>Access your dashboard</Typography>
				<TextField
					className={classes.input}
					autoComplete="email"
					name="email"
					variant="outlined"
					required
					fullWidth
					id="email"
					label="Email"
					autoFocus
					style={{ marginBottom: 10 }}
				/>
				<TextField
					className={classes.input}
					autoComplete="password"
					name="password"
					variant="outlined"
					required
					fullWidth
					id="password"
					label="Password"
					autoFocus
				/>
				<Grid container justifyContent="flex-end">
					<Grid item>
						<Link href="/forgotpassword" variant="body2" className={classes.link}>
							Forgot password?
						</Link>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions className={classes.content}>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.button}
					style={{ marginTop: 25 }}
				>
					Login
				</Button>
			</CardActions>
		</Card>
	);
}
