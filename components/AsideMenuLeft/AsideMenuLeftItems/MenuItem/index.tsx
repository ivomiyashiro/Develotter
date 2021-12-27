import Link from 'next/link';

import { theme } from 'styles/theme';
import { A, H4, Li } from './styles';

interface IProps {
  icon: any
  label: string
  href: string
}

export const MenuItem = ({
  icon: Icon,
  label,
  href
}: IProps) => {
  return (
    <>
      <Li>
        <Link href={href} passHref>
          <A>
            <Icon
              width="26px"
              color={theme.white}
              fill="currentColor"
              stroke="currentColor"
            />
            <H4>{label}</H4>
          </A>
        </Link>
      </Li>
    </>
  );
};
