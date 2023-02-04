import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { TextField, Button, Box } from "@mui/material";


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
		<div>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<TextField
				type="text"
				name="name"
				id="standard-basic"
				label="Name"
				variant="standard"
				/>
					<TextField
				type="email"
				name="email"
				id="standard-basic"
				label="Email"
				variant="standard"
				/>
					<TextField
				type="password"
				name="password"
				id="standard-basic"
				label="password"
				variant="standard"
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