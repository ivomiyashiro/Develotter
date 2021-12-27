/* eslint-disable @next/next/no-img-element */
import { Div, Img } from './styles';

interface IProps {
  imgUrl: string
}

export const ImageSection = ({ imgUrl } : IProps) => {

  return (

    <>
      <Div>
        <Img src={imgUrl} alt="hola" loading="lazy" />
      </Div>
    </>
  );
};
