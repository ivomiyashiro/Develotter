import { useContext, useState } from 'react';

import { IFav, IUser } from 'interfaces';

import { HeaderSection } from './HeaderSection';
import { BodySection } from './BodySection';
import { FooterSection } from './FooterSection';


interface IProps {
  id: string,
  user: IUser,
  favs: IFav[]
  img: string
  content: string
  created_at: Date
}

export const MainSection = ({
  id,
  user,
  favs,
  content,
  created_at,
  img,
}: IProps) => {
  // const {userState} = useContext(AppContext);
  // const [isCommentFormOpen, setCommentFormOpen] = useState(false);
  // const [isRevitMenuOpen, setRevitMenuOpen] = useState(false);
  // const [isQuoteDevitFormOpen, setQuoteDevitFormOpen] = useState(false);
  // const [isHeaderActionsMenuOpen, setHeaderActionsMenuOpen] = useState(false);
  // const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [isLoading, setLoading] = useState(false);

  return (
    <>
      <>
        <HeaderSection
          user={user}
          created_at={created_at}
          isComment={false}
          // handleHeaderActionsMenu={setHeaderActionsMenuOpen}
        />
        <BodySection
          content={content}
          img={img}
        />
        <FooterSection
          id={id}
          favs={favs}
          // handleCommentOpen={setCommentFormOpen}
          // handleRevitMenuOpen={setRevitMenuOpen}
        />
      </>
    </>
  );
};
