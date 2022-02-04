import { formatAMPM } from 'helpers/formatAMPM';
import { IDevit, IUser } from 'interfaces';

import { HeaderSection } from './HeaderSection';

import { Section, P, Wrapper, Time } from './styles';
import { formatMonthNumbertoText } from 'helpers/formatMonthNumberToText';

interface IProps {
  user: IUser
  devit: IDevit
}

export const DevitSection = ({user, devit}: IProps) => {

  const date = new Date(devit.created_at);
  const time = formatAMPM(new Date(devit.created_at));
  const month = formatMonthNumbertoText(date.getMonth());

  return (
    <>
      <Wrapper>
        <HeaderSection user={user} />
        <Section>
          <P>{devit.content}</P>
        </Section>
        <Section>
          <Time>
            {time} · {month} {date.getDate()}, {date.getFullYear()}
          </Time>
        </Section>
      </Wrapper>
    </>
  );
};
