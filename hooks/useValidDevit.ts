import { useEffect, useState } from 'react';

export const useValidDevit = (value: string, img: any) => {

  const [isDevitValid, setDevitValid] = useState<boolean>(false);

  useEffect(() => {
    const valueLength = value.length;
    const fileUrl = img.fileUrl;

    if (fileUrl === '') {
      console.log('hola');
      return setDevitValid(false);
    }

    if (valueLength === 0) {
      console.log('holaa');
      return setDevitValid(false);
    }

    if (valueLength > 0 && valueLength < 280) {
      return setDevitValid(true);
    }

    return setDevitValid(true);

  },[value.length, img.fileUrl]);

  return {
    isDevitValid
  };
};
