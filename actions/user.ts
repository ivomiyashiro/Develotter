import { Dispatch } from 'react';
import { fileUpload } from 'helpers/fileUpload';
import { firstEdit, updateUserProfile } from 'services/user';

export const editProfile = async(
  data: any,
  dispatch: Dispatch<any>
) => {
  
  const {
    cover_picture,
    profile_picture,
  } = data;

  let newCoverPicture = '';
  let newProfilePicture = '';
  let newData = { ...data, cover_picture: cover_picture.fileUrl, profile_picture: profile_picture.fileUrl };

  try {
    if (cover_picture.changed) {
      !!cover_picture.file
        ? newCoverPicture = await fileUpload(cover_picture.file)
        : newCoverPicture = 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png';

      newData = {
        ...data, 
        cover_picture: newCoverPicture

      };
    }

    if (profile_picture.changed) {
      !!profile_picture.file
        ? newProfilePicture = await fileUpload(profile_picture.file)
        : newProfilePicture = 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png';

      newData = {
        ...data,
        profile_picture: newProfilePicture
      };
    }
    console.log(newData);
    await updateUserProfile(newData);

    dispatch({
      type: 'UPDATE USER',
      payload: newData
    });

  } catch (error) {
    console.log(error);
  }
};

export const firstEditProfile = async(
  data: any,
  dispatch: Dispatch<any>,
) => {

  const {
    profilePicture,
    coverPicture,
  } = data;

  try {
    let newProfilePicture = '';
    !!profilePicture.file
      ? newProfilePicture = await fileUpload(profilePicture.file)
      : newProfilePicture = 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png';

    let newCoverPicture = '';
    !!coverPicture.file
      ? newCoverPicture = await fileUpload(coverPicture.file)
      : newCoverPicture = '';
    
    const newData = {
      ...data,
      newProfilePicture,
      newCoverPicture
    };

    const body = await firstEdit(newData);

    dispatch({
      type: 'FIRST EDIT PROFILE',
      payload: body.user
    });
  } catch (error) {
    console.log(error);
  }
};
