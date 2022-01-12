import { H1, HeaderComponent, P } from './styles';

export const Header = (
  {title, content}: {title: string, content: string}
) => {
  return (
    <>
      <HeaderComponent>
        <H1>{title}</H1>
        <P>{content}</P>
      </HeaderComponent>
    </>
  );
};
