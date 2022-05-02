import React, { useState } from 'react';
import * as S from './FormWithTwoInput.styles';

export default function Form() {
	const [formValues, setFormValues] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault(); //inibe o comportamento padrão do codigo
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);
		alert(` ${data.name} ${data.sobrenome}`);
	};

	return (
		<>
			<S.FormWithTwoInput>
				<S.FormContainer onSubmit={handleSubmit}>
					<S.Title>Formulário 2</S.Title>
					<S.ContainerButton>
						<S.Input type="text" name="name" placeholder='Digite seu nome' onChange={handleInputChange} value={formValues.name || ''} ></S.Input>
						<S.Input type="text" name="sobrenome" placeholder='Digite seu sobrenome' onChange={handleInputChange} value={formValues.sobrenome || ''} ></S.Input>
						<S.Button type="submit">Enviar</S.Button>
					</S.ContainerButton>
				</S.FormContainer>
			</S.FormWithTwoInput>
		</>
	)
}

