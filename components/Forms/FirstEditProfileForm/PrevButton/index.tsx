import { HoverableButton } from '../../../Buttons/HoverableButton';
import ArrowLeft from '../../../Icons/ArrowLeft';

import { theme } from 'styles/theme';
import { Div } from './styles';

export const PrevButton = ({handleStep}: any) => {
  return (
    <>
      <Div>
        <HoverableButton
          icon={ArrowLeft}
          width="24px"
          height="24px"
          color={theme.white}
          onClick={handleStep}
        />
      </Div>
    </>
  );
};
