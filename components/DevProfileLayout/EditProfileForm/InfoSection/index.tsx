import { useContext, useState } from 'react';
import { InputControl } from 'components/Inputs/InputControl';

import { AppContext } from 'context/AppContext';
import { PicturesSection } from './PicturesSection';

import { Section } from './styles';

export const InfoSection = () => {

  const {userState} = useContext(AppContext);
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
    value: 'Buenos Aires, Argentina',
    error: '',
    ok: false
  });
  const [website, setWebsite] = useState({
    value: 'www.hola.com.ar',
    error: '',
    ok: false
  });

  return (
    <>
      <PicturesSection />
      <Section>
        <InputControl 
          placeholder="Name"
          type="text"
          value={name.value}
          error={name.error}
          regEx={/^(\w{1,50})$/}
          setValue={setName}
          counter="50"
        />
        <InputControl 
          placeholder="Bio"
          type="text"
          value={!!bio.value ? bio.value : ''}
          error={bio.error}
          regEx={/^(\w{0,160})$/}
          setValue={setBio}
          counter="160"
          inputType='textarea'
        />
        <InputControl 
          placeholder="Location"
          type="text"
          value={location.value}
          error={location.error}
          setValue={setLocation}
          counter="30"
        />
        <InputControl 
          placeholder="Website"
          type="text"
          value={website.value}
          error={website.error}
          setValue={setWebsite}
          counter="100"
        />
      </Section>
    </>
  );
};
