import { FormEvent, useContext, useState } from 'react';
import { TopBar } from './TopBar';
import { InfoSection } from './InfoSection';

import { Form } from './styles';
import { AppContext } from 'context/AppContext';
import { editProfile } from 'actions/user';

interface IProps {
  setEditProfileFormOpen: (value: boolean) => void
}

export const EditProfileForm = ({setEditProfileFormOpen}: IProps) => {

  const { userState, userDispatch } = useContext(AppContext);

  const [cover_picture, setCoverPicture] = useState({
    file: '',
    fileUrl: userState.cover_picture,
    changed: false
  });
  const [profile_picture, setProfilePicture] = useState({
    file: '',
    fileUrl: userState.profile_picture,
    changed: false
  });
  const [name, setName] = useState({
    value: userState.name,
    error: '',
    ok: false
  });
  const [bio, setBio] = useState({
    value: userState.bio,
    error: '',
    ok: false
  });
  const [location, setLocation] = useState({
    value: userState.location,
    error: '',
    ok: false
  });
  const [website, setWebsite] = useState({
    value: userState.website,
    error: '',
    ok: false
  });

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      ...userState,
      name: name.value,
      bio: bio.value,
      location: location.value,
      website: website.value,
      cover_picture,
      profile_picture,
    };

    await editProfile(data, userDispatch);
    setEditProfileFormOpen(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TopBar setEditProfileFormOpen={setEditProfileFormOpen}/>
        <InfoSection 
          coverPicture={cover_picture}
          handleCoverPicture={setCoverPicture}
          profilePicture={profile_picture}
          handleProfilePicture={setProfilePicture}
          name={name}
          handleName={setName}
          bio={bio}
          handleBio={setBio}
          location={location}
          handleLocation={setLocation}
          website={website}
          handleWebsite={setWebsite}
        />
      </Form>
    </>
  );
};
