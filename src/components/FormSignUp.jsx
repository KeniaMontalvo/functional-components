import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp({handleSubmit}) {	
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [prom, setProm] = useState(true)
	const [nov, setNov] = useState(false)

	const [errors, setErrors] = useState({
		name: {
			error: false,
			message: "Deben ser al menos 3 caracteres"
		}
	})

	const [errors2, setErrors2] = useState({
		lastName: {
			error: false,
			message: "Deben ser al menos 3 caracteres"
		}
	})

	const [errors3, setErrors3] = useState({
		email: {
			error: false,
			message: "Esto no es formato válido para email"
		}
	})

	function validarNombre(nombre){
		if(nombre.length >= 3) {
			return {name: {
				error: false, 
				message: ""}}
		} else {
			return {name: {
				error: true, 
				message: "Deben ser al menos 3 caracteres"}}
		} 
	}

	function validarApellido(apellido){
		if(apellido.length >= 3) {
			return {lastName: {
				error: false, 
				message: ""}}
		} else {
			return {lastName: {
				error: true, 
				message: "Deben ser al menos 3 caracteres"}}
		} 
	}

	function validarEmail(email){
		if(email.length >= 3) {
			return {email: {
				error: false, 
				message: ""}}
		} else {
			return {email: {
				error: true, 
				message: "Esto no es formato válido para email"}}
		} 
	}

	return (
		<form 
			onSubmit={(e) => {
			e.preventDefault()
			handleSubmit({
				name,
				lastName,
				email,
				prom,
				nov})
		}}>
			<TextField 
				id="name" 
				label="Nombre"
				variant="outlined"
				fullWidth
				margin="normal"
				onChange={(e) => setName(e.target.value)}
				value={name}
				error={errors.name.error}
				helperText={errors.name.error ? errors.name.message : ""}
				onBlur={(e)=> {
					setErrors(validarNombre(e.target.value))
					
				}}
			/>
			<TextField 
				id="lastName" 
				label="Apellidos"
				variant="outlined"
				fullWidth
				margin="normal"
				onChange={(e) => setLastName(e.target.value)}
				value={lastName}
				error={errors2.lastName.error}
				helperText={errors2.lastName.error ? errors2.lastName.message : ""}
				onBlur={(e) => {
					setErrors2(validarApellido(e.target.value))
				}}
			/>
			<TextField 
				id="email" 
				label="Email"
				variant="outlined"
				fullWidth
				margin="normal"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				error={errors3.email.error}
				helperText={errors3.email.error ? errors3.email.message : ""}
				onBlur={(e) => {
					setErrors3(validarEmail(e.target.value))
				}}
			/>
			<FormGroup>
				<FormControlLabel control={
					<Switch 
						checked={prom}
						onChange={(e) => setProm(e.target.checked)}
					/>} label="Promociones"
				/>
			
					<FormControlLabel control={
						<Switch
							checked={nov}
							onChange={(e) => setNov(e.target.checked)} />
						} label="Novedades"
					/>
			</FormGroup>
			<Button 
				variant="contained"
				type="submit">
				Registrarse
			</Button>
		</form>
	)
}

export default FormSignUp
