import Link from 'next/link';
import { theme } from 'styles/theme';
import { Li, H4, A } from './styles';

export const MenuItem = ({
  icon: Icon,
  label,
  href = '',
  disabled
}: any) => {
  return (
    <>
      {
        disabled
          ? (
            <Li>
              <Icon
                width="20px"
                height="20px"
                color={theme.darker_white}
                fill="currentColor"
              />
              <H4 disabled={disabled}>{label}</H4>
            </Li>
          )
          : (
            <Li>
              <Link href={href} passHref>
                <A>
                  <Icon
                    width="20px"
                    height="20px"
                    color={theme.white}
                    fill="currentColor"
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
