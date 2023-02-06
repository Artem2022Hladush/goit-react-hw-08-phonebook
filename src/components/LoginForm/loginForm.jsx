import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';

import css from "../LoginForm/LoginForm.module.css"

import { TextField, Button, Box } from "@mui/material"

export const LoginForm = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
		  case 'email':
			 return setEmail(value);
		  case 'password':
			 return setPassword(value);
		  default:
			 return;
		}
	 };
	
	 const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(logIn({ email, password }));
		setEmail('');
		setPassword('');
	 };

	return (
		<div className={css.wrapper}>

		<form onSubmit={handleSubmit}>
			<TextField
			type="email"
			name="email"
			variant="outlined"
			id="outlined-basic"
			margin="normal"
			fullWidth
			label="Email"
			value={email}
			onChange={handleChange}
			/>
			<TextField
			type="password"
			name="password"
			variant="outlined"
			id="outlined-basic"
			label="Password"
			fullWidth
			value={password}
			onChange={handleChange}
			/>
			<Box textAlign="center" marginTop={5}>
         	<Button variant="contained" type="submit">
            	LogIn
         	</Button>
      	</Box>
		</form>
		</div>
	)
}