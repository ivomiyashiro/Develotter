import { theme } from 'styles/theme';
import { Li, H4 } from './styles';

export const MenuItem = ({
  icon: Icon,
  label
}: any) => {
  return (
    <Li>
      <Icon
        width="20px"
        height="20px"
        color={theme.white}
        fill="currentColor"
      />
      <H4>{label}</H4>
    </Li>
  );
};
