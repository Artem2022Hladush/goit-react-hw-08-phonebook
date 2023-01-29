import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
	FormControl,
	FormLabel,
	Input,
	Button
 } from '@chakra-ui/react';



export const LoginForm = () => {
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.prventDefault();
		const form = e.currentTarget;
		dispatch(
			logIn({
			email: form.elements.email.value,
      	password: form.elements.password.value,
		})
		);
		form.reset();
	};
	return (
		<FormControl onSubmit={handleSubmit} autoComplete='off'>
			<FormLabel>Email</FormLabel>
			<Input type='email' name='email'/>
			<FormLabel>Password</FormLabel>
			<Input type='password' name='password'/>
			<Button type='submit'>Login</Button>
		</FormControl>
	)
}