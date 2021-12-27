import { useEffect, useState } from 'react';

export const useValidDevit = (value: string, img: any) => {

  const [isDevitValid, setDevitValid] = useState(false);

  useEffect(() => {
    const valueLength = value.length;
    const fileUrl = img.fileUrl;
    if (valueLength === 0 && fileUrl !== '') {
      return setDevitValid(false);
    }

    if (valueLength > 0 && valueLength < 280) {
      return setDevitValid(true);
    }
  },[value.length, img.fileUrl]);

  return {
    isDevitValid
  };
};
