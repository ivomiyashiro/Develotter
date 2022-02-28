import Link from 'next/link';

import { theme } from 'styles/theme';
import { A, H4, Li, Span } from './styles';

interface IProps {
  icon: any
  label: string
  href: string
  disabled: boolean
}

export const MenuItem = ({
  icon: Icon,
  label,
  href,
  disabled
}: IProps) => {
  return (
    <>
      {
        disabled
          ? (
            <Li>
              <Span>
                <Icon
                  width="26px"
                  color={theme.darker_white}
                  fill="currentColor"
                  stroke="currentColor"
                />
                <H4 disabled={disabled}>{label}</H4>
              </Span>
            </Li>
          )
          : (
            <Li>
              <Link href={href} passHref>
                <A>
                  <Icon
                    width="26px"
                    color={theme.white}
                    fill="currentColor"
                    stroke="currentColor"
                  />
                  <H4 disabled={disabled}>{label}</H4>
                </A>
              </Link>
            </Li>
          )
      }

    </>
  );
};
