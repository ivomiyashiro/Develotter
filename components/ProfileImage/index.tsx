import Image from 'next/image';
import { Div, Section } from './styles';

interface IProps {
  profileImage: string | null,
  alt: string
}

export const ProfileImage = ({ profileImage, alt }: IProps) => {
  return (
    <>
      <Div>
        <Section>
          <Image 
            src={!!profileImage ? profileImage : '/assets/images/profile_picture.png'}
            alt={alt}
            layout="fill"
            objectFit="cover"
          /> 
        </Section>
      </Div>
    </>
  );
};
