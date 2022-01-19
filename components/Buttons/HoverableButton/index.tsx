import { MouseEventHandler, useState } from 'react';
import { Button } from './styles';

interface IProps {
  icon: any
  width: string
  height: string
  hoverColor?: string
  color: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const HoverableButton = ({
  icon: Icon,
  width,
  height,
  color,
  hoverColor = color,
  onClick
}: IProps) => {

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <Button
        onClick={onClick} 
        type="button"
        color={color}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Icon
          width={width}
          heigth={height}
          color={mouseOver ? color : hoverColor}
        />
      </Button>
    </>
  );
};
