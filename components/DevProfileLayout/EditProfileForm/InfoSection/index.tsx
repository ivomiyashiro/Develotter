import { IProps } from './IProps';

import { InputControl } from 'components/Inputs/InputControl';
import { PicturesSection } from './PicturesSection';

import { Section } from './styles';

export const InfoSection = ({
  coverPicture,
  handleCoverPicture,
  profilePicture,
  handleProfilePicture,
  name,
  handleName,
  bio,
  handleBio,
  location,
  handleLocation,
  website,
  handleWebsite,
}: IProps) => {

  return (
    <>
      <PicturesSection 
        coverPicture={coverPicture}
        handleCoverPicture={handleCoverPicture}
        profilePicture={profilePicture}
        handleProfilePicture={handleProfilePicture}
      />
      <Section>
        <InputControl 
          placeholder="Name"
          type="text"
          value={name.value}
          error={name.error}
          regEx={/^(\w{1,50})$/}
          setValue={handleName}
          counter="50"
        />
        <InputControl 
          placeholder="Bio"
          type="text"
          value={!!bio.value ? bio.value : ''}
          error={bio.error}
          regEx={/^[a-zA-Z0-9_ ]{0,160}$/}
          setValue={handleBio}
          counter="160"
          inputType='textarea'
        />
        <InputControl 
          placeholder="Location"
          type="text"
          value={location.value}
          error={location.error}
          setValue={handleLocation}
          counter="30"
        />
        <InputControl 
          placeholder="Website"
          type="text"
          value={website.value}
          error={website.error}
          setValue={handleWebsite}
          counter="100"
        />
      </Section>
    </>
  );
};
