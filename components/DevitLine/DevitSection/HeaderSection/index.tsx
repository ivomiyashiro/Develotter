import Image from 'next/image';
import { IUser } from 'interfaces';

import { HoverableButton } from 'components/Buttons/HoverableButton';

import DotsIcon from 'components/Icons/Dots';
import { theme } from 'styles/theme';
import { Div, Header, Wrapper, Section, A, P } from './styles';

interface IProps {
  user: IUser
}

export const HeaderSection = ({user}: IProps) => {
  return (
    <>
      <Div>
        <Header>
          <Wrapper>
            <Section>
              <Image
                src={user.profile_picture} 
                layout="fill"
                alt={user.name}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={user.cover_picture}
              />
            </Section>
            <div>
              <A href={`/${user.username}`}>
                {user.name}
              </A>
              <P>@{user.username}</P>
            </div>
          </Wrapper>
          <HoverableButton 
            width="20px"
            height="20px"
            color={theme.darker_white}
            icon={DotsIcon}
          />
        </Header>
      </Div>
    </>
  );
};
