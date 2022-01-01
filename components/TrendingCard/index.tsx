import Image from 'next/image';
import Link from 'next/link';
import { Article, H3, ImageContainer, P, Section } from './styles';

export const TrendingCard = () => {
  return (
    <>
      <Link href="/" passHref>
        <Article>
          <Section>
            <header>
              <P>Trending in Football · Last night</P>
            </header>
            <div>
              <H3>Manchester United vs Arsenal FC</H3>
            </div>
            <footer>
              <P>27.3k Tweets</P>
            </footer>
          </Section>
          <ImageContainer>
            <Image 
              src="/assets/images/trendings.jpg"
              alt="manchester"
              layout="fill"
              objectFit="cover"
            />
          </ImageContainer>
        </Article>
      </Link>
    </>
  );
};
