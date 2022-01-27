import { TopBar } from './TopBar';
import { InfoSection } from './InfoSection';

import { Form } from './styles';

interface IProps {
  setEditProfileFormOpen: (value: boolean) => void
}

export const EditProfileForm = ({setEditProfileFormOpen}: IProps) => {
  return (
    <>
      <Form>
        <TopBar setEditProfileFormOpen={setEditProfileFormOpen}/>
        <InfoSection />
      </Form>
    </>
  );
};
