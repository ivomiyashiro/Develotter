import { Div, P, Section } from './styles';

interface IProps {
  message: string
  isError: boolean
}

export const Toast = ({
  message,
  isError,
}: IProps) => {
  return (
    <Div isError={isError}>
      <Section>
        <P>{ message }</P>
      </Section>
    </Div>
  );
};
