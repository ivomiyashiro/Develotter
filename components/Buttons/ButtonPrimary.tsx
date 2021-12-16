import { MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

import { Anchor, Button } from './styles';

interface IProps {
  children: ReactNode,
  type?: 'button' | 'link'
  style?: 'normal' | 'outline'
  textColor: string
  color: string
  href?: string
  isDisabled?: boolean
  action?: 'submit' | 'reset' | 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ButtonPrimary = ({
  children,
  isDisabled,
  type = 'button',
  href,
  color,
  textColor,
  style = 'normal',
  action = 'submit',
  onClick,
}: IProps) => {
  return (
    <>
      {
        type === 'button'
        &&
        <Button
          style={style}
          disabled={isDisabled}
          type={action}
          color={color}
          textColor={textColor}
          onClick={onClick}
        >
          { children }
        </Button>
      }

      {
        type === 'link'
        &&
        <Link
          href={href as string}
          passHref
        >
          <Anchor
            style={style}
            color={color}
            textColor={textColor}
          >
            {children}
          </Anchor>
        </Link>
      }
    </>
  );
};
