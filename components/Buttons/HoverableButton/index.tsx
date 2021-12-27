import { MouseEventHandler } from 'react';
import { Button } from './styles';

interface IProps {
  icon: any
  width: string
  height: string
  color: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const HoverableButton = ({
  icon: Icon,
  width,
  height,
  color,
  onClick
}: IProps) => {
  return (
    <>
      <Button
        onClick={onClick} 
        type="button"
        color={color}
      >
        <Icon
          width={width}
          heigth={height}
          stroke="currentColor"
        />
      </Button>
    </>
  );
};
