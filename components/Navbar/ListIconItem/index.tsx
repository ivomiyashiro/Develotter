
import Link from 'next/link';
import { theme } from 'styles/theme';

export const ListIconItem = ({icon: Icon, route, disabled}: any) => {

  return (
    <>
      {
        disabled
          ? (
            <li>
              <Icon
                height="28px"
                width="28px"
                color={theme.darker_white}
                fill="currentColor"
                stroke="currentColor"
              />
            </li>
          )
          : (
            <li>
              <Link href={route}>
                <a>
                  <Icon
                    height="28px"
                    width="28px"
                    color={theme.white}
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </a>
              </Link>
            </li>
          )
      }

    </>
  );
};
