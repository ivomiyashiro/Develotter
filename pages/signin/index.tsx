import { NextPage } from 'next';
import Head from 'next/head';

import { SigninForm } from 'components/Forms/Signin';
import { FormWrapper } from 'components/FormWrapper';
import { Modal } from 'components/Modal';
import { PublicRoute } from 'components/PublicRoute';

const Signin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign in for Develotter / Develotter</title>
      </Head>

      <PublicRoute>
        <Modal
          isOpen={true}
        >
          <FormWrapper>
            <SigninForm />
          </FormWrapper>
        </Modal>
      </PublicRoute>
    </>
  );
};

export default Signin;
