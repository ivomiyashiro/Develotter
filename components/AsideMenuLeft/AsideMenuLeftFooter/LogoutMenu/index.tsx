import Link from 'next/link';

import { Div, Li, Ul, A } from './styles';

interface IProps {
  username: string
}

export const LogoutMenu = ({ username }: IProps) => {
  return (
    <Div>
      <Ul>
        <Li>
          <Link href="/logout" passHref>
            <A>Log out @{username}</A>
          </Link>
        </Li>
      </Ul>
    </Div>
  );
};
