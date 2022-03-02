import { useRouter } from 'next/router';

import { IUser } from 'interfaces';
import { ImageSection } from '../ImageSection';
import { Div } from './styles';

interface IProps {
  content: string
  img: string
  user: any
  id: string
  isComment?: boolean
}

export const BodySection = ({id, user, content, img, isComment = false}: IProps) => {

  const router = useRouter();

  const handleDevitRoute = () => {
    router.push(`/${user.username}/status/${id}`);
  };

  return (
    <>
      <Div onClick={() => !isComment && handleDevitRoute()}>
        {content}
        {
          !!img && <ImageSection imgUrl={img}/>
        }
      </Div>
    </>
  );
};

