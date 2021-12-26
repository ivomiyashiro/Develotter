import { PrivateRoute } from 'components/PrivateRoute';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PrivateRoute>
      hola!
    </PrivateRoute>
  );
};

export default Home;
