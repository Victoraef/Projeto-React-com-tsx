import React, { useState } from "react";
import * as S from './Counter.styles';

export default function Counter() {
  const [value, setValue] = useState(0)
  
  const addCounter = () => setValue(value + 1);
  const remove = () => setValue(value - 1);

  return (
    <S.Counter>
      <S.FormContainer>
        <S.Title>Contador</S.Title>
        <S.ContainerButton>
          <S.Button type="button" onClick={remove}>-1</S.Button>
          <S.Button type="button" onClick={addCounter}>+1</S.Button>
        </S.ContainerButton>
        <S.Paragraph>Você clicou {value} vezes. </S.Paragraph>
      </S.FormContainer>
    </S.Counter>
  );
}