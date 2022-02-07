/* eslint-disable @next/next/no-img-element */
import TimesIcon from 'components/Icons/Times';
import { theme } from 'styles/theme';
import { Button, Div, Img } from './styles';

type fileState = {
  file: string,
  fileUrl: string
}

interface IProps {
  src: string,
  alt: string,
  handleImageUrl: (value: fileState | ((prev: fileState) => fileState)) => void
  handleValidForm: (value: boolean) => void
}

export const ImageSection = ({src, alt, handleImageUrl, handleValidForm}: IProps) => {
  return (
    <Div>
      <Img src={src} alt={alt} />
      <Button onClick={
        () => {handleImageUrl({file: '', fileUrl: ''});handleValidForm(false);}} type="button"
      >
        <TimesIcon
          width="18px" 
          height="18px" 
          fill="currentColor" 
          color={theme.white} 
        />
      </Button>
    </Div>
  );
};
