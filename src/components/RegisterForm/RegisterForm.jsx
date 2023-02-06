import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "redux/auth/operations";
import { TextField, Button, Box } from "@mui/material";
import css from "../LoginForm/LoginForm.module.css";



 export const RegisterForm = () => {
	const dispatch = useDispatch();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = ({target: {name, value}}) => {
	switch (name) {
		case 'name':
			return setName(value)
		case 'email':
			return setEmail(value)
		case 'password':
			return setPassword(value)	
	
		default:
			return;
	}
}

const handleSubmit = e => {
	e.preventDefault();
	dispatch(register({ name: name, email: email, password: password }));
	setName('');
	setEmail('');
	setPassword('');
 };

	return(
		<div className={css.wrapper}>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<TextField
				type="text"
				name="name"
				value={name}
				onChange={handleChange}
				id="standard-basic"
				label="Name"
				variant="standard"
				fullWidth
				/>
					<TextField
				type="email"
				name="email"
				value={email}
				onChange={handleChange}
				id="standard-basic"
				label="Email"
				variant="standard"
				fullWidth
				/>
					<TextField
				type="password"
				name="password"
				value={password}
				onChange={handleChange}
				id="standard-basic"
				label="password"
				variant="standard"
				fullWidth
				/>
			<Box textAlign="center" marginTop={10}>
         	<Button variant="outlined" type="submit">
            	Register
         	</Button>
      	</Box>
			</form>
		</div>
	)
 }