import { AsideLeftMenu } from 'components/AsideMenuLeft';
import { DevelotterLayout } from 'components/DevelotterLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PrivateRoute>
      <DevelotterLayout>
        <AsideLeftMenu />
      </DevelotterLayout>
    </PrivateRoute>
  );
};

export default Home;
