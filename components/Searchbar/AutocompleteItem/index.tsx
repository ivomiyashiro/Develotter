import Link from 'next/link';
import Image from 'next/image';

import { A, Div, H3, Li, P, Section, Span } from './styles';

interface IProps {
  username: string
  name: string
  profile_picture: string
  bio: string
}

export const AutocompleteItem = ({ username, name, profile_picture, bio }: IProps) => {
  return (
    <>
      <Li>
        <Link href={`/${username}`} passHref>
          <A>
            <Section>
              <Image src={profile_picture} alt={name} layout="fill" objectFit="cover" />
            </Section>
            <Div>
              <H3>{name}</H3>
              <P>@{username}</P>
              <Span>{bio}</Span>
            </Div>
          </A>
        </Link>
      </Li>
    </>
  );
};
