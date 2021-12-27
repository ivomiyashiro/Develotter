import { useContext, useState } from 'react';

import { IUser } from 'interfaces';

import { HeaderSection } from './HeaderSection';
import { BodySection } from './BodySection';


interface IProps {
  id: string,
  user: IUser,
  img: string
  content: string
  created_at: Date
}

export const MainSection = ({
  id,
  user,
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
        {/* <ContentFooter 
          id={id}
          favs={favs}
          revits={revits}
          comments={comments}
          handleCommentOpen={setCommentFormOpen}
          handleRevitMenuOpen={setRevitMenuOpen}
        /> */}
      </>
    </>
  );
};
