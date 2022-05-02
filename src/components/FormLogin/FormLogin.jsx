import React from 'react';
import * as S from './FormLogin.styles';

export default function FormLogin() {
    return (
        <>
            <S.FormLogin>
                <S.FormContainer>
                    <S.Title>Login</S.Title>
                    <S.Input type="email" placeholder="Email" />
                    <S.Input type="senha"placeholder="Senha" />
                    
                    <S.ContainerButton>
                        <S.Button type="button">Entrar</S.Button>

                      
                    </S.ContainerButton>
                </S.FormContainer>

            </S.FormLogin>
        </>
    );
}