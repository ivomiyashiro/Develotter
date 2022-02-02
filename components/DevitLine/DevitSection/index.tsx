
import { IDevit, IUser } from 'interfaces';
import { HeaderSection } from './HeaderSection';


interface IProps {
  user: IUser
  devit: IDevit
}

export const DevitSection = ({user, devit}: IProps) => {
  return (
    <>
      <HeaderSection user={user} />
    </>
  );
};
