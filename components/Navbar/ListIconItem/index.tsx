
import Link from 'next/link';
import { theme } from 'styles/theme';

export const ListIconItem = ({icon: Icon, route}: any) => {

  return (
    <>
      <li>
        <Link href={route}>
          <a>
            <Icon
              height="28px"
              width="28px"
              color={theme.white}
            />
          </a>
        </Link>
      </li>
    </>
  );
};
