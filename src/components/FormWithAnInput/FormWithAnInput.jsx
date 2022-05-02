import React, { useState } from 'react';
import * as S from './FormWithAnInput.styles';

export default function Form() {
	const [nome, setNome] = useState('');

	return (
		<>
			<S.FormWithAnInput>
				<S.FormContainer>
					<S.Title>Formulário 1</S.Title>
						<S.Input
							type="text"
							name="fnome"
							placeholder='Digite seu nome'
							value={nome}// Associando com state que eu quero usar, no caso, nome.
							onChange={(e) => setNome(e.target.value)}//onChange, função de manipulação de state, dentro da arrow function,  irei chamar implicitamente o valor do meu evento e depois indicar o valor do meu evento.
							/>
							<S.ContainerButton>
						<S.Paragraph>Nome digitado:{nome}</S.Paragraph>
					</S.ContainerButton>
				</S.FormContainer>
			</S.FormWithAnInput>
		</>
	)
}

