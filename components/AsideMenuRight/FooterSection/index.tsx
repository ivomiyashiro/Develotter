import Link from 'next/link';
import { P } from './styles';

export const FooterSection = () => {
  return (
    <>
      <footer>
        <Link href="/explore" passHref>
          <P>Show More</P> 
        </Link>
      </footer>
    </>
  );
};
