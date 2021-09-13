import { PropsWithChildren, useState } from "react";
import React from "react";
import * as C from './Card.styles';
import Button from './Button';

type CardProps = PropsWithChildren<{
  title: string,
  align?: 'center' | 'left' | 'right',
  //children: ReactNode
}>

function Card(props: CardProps) {
  const [showButton, setShowButton] = useState(true);
  return <C.Wrapper align={props.align || 'left'}>
    <C.Title>{props.title}</C.Title>
    {props.children}
    <div>
      {
        showButton &&
          <Button
            onClick={() => setShowButton(false)}
          >
            Ver mais
          </Button>
      }      
    </div>
  </C.Wrapper>
}


export default Card