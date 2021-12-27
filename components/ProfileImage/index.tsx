import Image from 'next/image';
import { Div, Section } from './styles';

interface IProps {
  profileImage: string,
  alt: string
}

export const ProfileImage = ({ profileImage, alt }: IProps) => {
  return (
    <>
      <Div>
        <Section>
          <Image 
            src={!!profileImage ? profileImage : '/assets/profile_picture.png'}
            alt={alt}
            layout="fill"
            objectFit="cover"
          /> 
        </Section>
      </Div>
    </>
  );
};
