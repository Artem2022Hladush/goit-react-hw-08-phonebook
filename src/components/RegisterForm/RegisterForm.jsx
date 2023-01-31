import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

import {
	FormControl,
	FormLabel,
	Input,
	Button
 } from '@chakra-ui/react';

 export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget;
		dispatch(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
			);
			form.reset();
	}
	return(
		<FormControl onSubmit={handleSubmit} autoComplete='off'> 
			<FormLabel>UserName</FormLabel>
			<Input type='text' name='name'/>
			<FormLabel>Email</FormLabel>
			<Input type='email' name='email'/>
			<FormLabel>Password</FormLabel>
			<Input type='password' name='password'/>
			<Button type='submit'>Register</Button>
		</FormControl>
	)
 }