import DevitIcon from 'components/Icons/Devit';
import { theme } from 'styles/theme';
import { Button } from './styles';

export const DevitButton = () => {

  // const { uiDispatch } = useContext(AppContext);

  return (
    <>      
      {/* <Button onClick={() => handleOpenCreateDevitForm(uiDispatch)}> */}
      <Button>
        <DevitIcon 
          height="24px"
          width="24px"
          color={theme.blue}
          fill={theme.blue}
        />
      </Button>
    </>
  );
};
