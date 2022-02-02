import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { IUser } from 'interfaces';

import DotsIcon from 'components/Icons/Dots';
import { theme } from 'styles/theme';
import { HoverableButton } from 'components/Buttons/HoverableButton';
import { A, Anchor, Header, P, Section, Paragraph, Time } from './styles';
import Link from 'next/link';

interface IProps {
  id: string
  user: IUser
  created_at: Date
  isComment: boolean
  handleHeaderActionsMenu?: (value: boolean) => void
}

export const HeaderSection = ({
  id,
  user,
  created_at,
  isComment,
  handleHeaderActionsMenu
}: IProps ) => {

  TimeAgo.addLocale(en);

  return (
    <>
      <Header>
        <Paragraph>
          <Link href={`/${user.username}`} passHref>
            <A>
              {user.name}
            </A>
          </Link>
          <P>@{user.username} ·</P>
          <Anchor href={`/${user.username}/status/${id}`}>
            <Time> <ReactTimeAgo date={new Date(created_at)} locale="en-US" timeStyle="twitter" /></Time>
          </Anchor>
        </Paragraph>
        {
          !isComment
          &&
          <Section>
            <HoverableButton
              icon={DotsIcon}
              height="20px"
              width="20px"
              color={theme.hack}
              hoverColor={theme.darker_white}
              onClick={handleHeaderActionsMenu && (() => handleHeaderActionsMenu(true))}
            />
          </Section>
        }
      </Header>
    </>
  );
};
