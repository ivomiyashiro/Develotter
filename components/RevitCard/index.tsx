/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReactTimeAgo from 'react-time-ago';

import { getUser } from 'services/user';
import { IUser } from 'interfaces';

import { Div, H3, Header, HeaderContentSection, HeaderUserInfo, P, ProfileImgContainer } from './styles';

interface IProps {
  id: string
  content: string
  created_at: Date
  img: string
}

export const RevitCard = ({
  id,
  content,
  created_at,
  img
}: IProps) => {

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    let cancelAsyncTask = false;
    
    getUser(id)
      .then(resp => {
        if (cancelAsyncTask) return;
        if (!resp.ok) return;
        setUser(resp.user);
      })
      .catch(error => console.log(error));

    return () => {
      cancelAsyncTask = true;
    };
  }, [id, user]);

  return (
    <>
      <Div>
        <Header>
          <HeaderUserInfo>
            <ProfileImgContainer>
              <Image 
                src={!!user ? user.profile_picture : '/assets/images/profile_picture.png'} 
                alt={!!user ? user.name : ''} 
                layout="fill" 
                objectFit="cover"
              />
            </ProfileImgContainer>
            <H3>{!!user ? user.name : ''}</H3>
            <P>@username</P>
            <P>· <ReactTimeAgo date={new Date(created_at)} locale="en-US" timeStyle="twitter"/></P>
          </HeaderUserInfo>
          <HeaderContentSection>
            {content}
          </HeaderContentSection>  
        </Header>
        {
          img
          &&
          <img src={img} alt={img} />
        }
      </Div>
    </>
  );
};
