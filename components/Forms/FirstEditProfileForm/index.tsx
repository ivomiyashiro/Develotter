import { FormEvent, useContext, useEffect, useState } from 'react';

import { firstEditProfile } from 'actions/user';

import { AppContext } from 'context/AppContext';
import { BioStep } from './Steps/BioStep';
import { CoverPictureStep } from './Steps/CoverPictureStep';
import { FinalStep } from './Steps/FinalStep';
import { ProfilePictureStep } from './Steps/ProfilePictureStep';
import { UsernameStep } from './Steps/UsernameStep';
import { PrevButton } from './PrevButton';

import Logo from 'components/Icons/Logo';
import { theme } from 'styles/theme';
import { Form, Header } from './styles';

export const FirstEditProfileForm = () => {

  const {userState, userDispatch} = useContext(AppContext);
  const [formStep, setFormStep] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    profilePicture: {
      file: '',
      fileUrl: ''
    },
    coverPicture:  {
      file: '',
      fileUrl: ''
    },
    username: '',
    bio: '',
  });

  useEffect(() => {
    setFormValues({
      profilePicture: {
        file: '',
        fileUrl: ''
      },
      coverPicture:  {
        file: '',
        fileUrl: ''
      },
      username: userState.username,
      bio: userState.bio,
    });
  }, [userState.username, userState.bio]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      ...formValues,
      uid: userState.id
    };
    setLoading(true);
    await firstEditProfile(
      data,
      userDispatch,
    );
    setLoading(false);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Header>
          {
            formStep !== 0
            &&
            <PrevButton handleStep={() => setFormStep(prev => (prev - 1))} />
          }
          {
            formStep !== 4
            &&
            <Logo
              height="44px"
              width="44px"
              color={theme.white}
            />
          }
        </Header>
        {
          formStep === 0
          &&
          <ProfilePictureStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
            imageUrl={formValues.profilePicture.fileUrl}
          />
        }
        {
          formStep === 1
          &&
          <CoverPictureStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
            profilePicture={formValues.profilePicture.fileUrl}
            coverPicture={formValues.coverPicture.fileUrl}
          />
        }
        {
          formStep === 2
          &&
          <UsernameStep
            handleStep={setFormStep}
            handleFormValues={setFormValues}
            username={formValues.username}
          />
        }
        {
          formStep === 3
          &&
          <BioStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
            bioValue={formValues.bio ? formValues.bio : ''}
          />
        }
        {
          formStep === 4
          &&
          <FinalStep 
            formValues={formValues}
            isLoading={isLoading}
          />
        }
      </Form>
    </>
  );
};
