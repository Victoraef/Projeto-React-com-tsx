import styled from "styled-components";

export const Counter = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
height: 100vh;

`;

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 22px;
width: 100%;
height: 278px;
border-radius: 10px;
margin-top: 94px;
background-color: #121a2c;
box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.h1`
	text-align: center;
`;

export const ContainerButton = styled.div`
	width: 100%;
    padding: 24px;
	display: flex;
    flex-direction: row;
    align-content: flex-end;
    justify-content: space-evenly;
`;

export const Paragraph = styled.p`
	text-align: center;
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
