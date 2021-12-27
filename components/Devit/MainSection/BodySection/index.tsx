import { ImageSection } from '../ImageSection';
import { Div } from './styles';

interface IProps {
  content: string
  img: string
}

export const BodySection = ({content, img}: IProps) => {
  return (
    <>
      <Div>
        {content}
        {
          !!img && <ImageSection imgUrl={img}/>
        }
      </Div>
    </>
  );
};

