import Link from 'next/link';
import { useRouter } from 'next/router';

import { IUser } from 'interfaces';
import { Nav, Ul, Li, A } from './styles';

export interface IProps {
  user: IUser
}

export const NavSection = ({user}: IProps) => {
  
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <Nav>
        <Ul>
          <Li onClick={() => router.push(`/${user.username}`)}>
            <Link href={`/${user.username}`} passHref>
              <A isActive={
                path === '/[user]'
                  ? true
                  : false
              }>
                  Devit
              </A>
            </Link>
          </Li>
          <Li onClick={() => router.push(`/${user.username}/revits`)}>
            <Link href={`/${user.username}/revits`} passHref>
              <A isActive={
                path === '/[user]/revits'
                  ? true
                  : false
              }>
                  Revits
              </A>
            </Link>
          </Li>
          <Li onClick={() => router.push(`/${user.username}/likes`)}>
            <Link href={`/${user.username}/likes`} passHref>
              <A isActive={
                path === '/[user]/likes'
                  ? true
                  : false
              }>
                  Likes
              </A>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </>
  );
};
