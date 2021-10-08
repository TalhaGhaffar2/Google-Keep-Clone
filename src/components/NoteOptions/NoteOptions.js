import React, { useContext } from 'react';
import Button from '../../UI/Button/Button';
import PaletteButton from '../../UI/PaletteButton/PaletteButton';
import {
  FaRegBell,
  FaUserPlus,
  FaPalette,
  FaImage,
  FaTrash,
  FaTrashRestore,
} from 'react-icons/fa';
import { MdArchive, MdUnarchive } from 'react-icons/md';
import KeepContext from '../../context/KeepContext';

const NoteOptions = ({
  classes,
  large,
  change,
  archived,
  archive,
  deleted,
  unarchive,
  noteId,
}) => {
  const { hardDeleteNote, restaureNote } = useContext(KeepContext);
  let spacingClasses = `${large ? 'mr-4' : 'mr-2'}`;

  const handleDelete = () => {
    hardDeleteNote(noteId);
    console.log('deleted');
  };

  const handleRestaure = () => {
    restaureNote(noteId);
  };

  if (deleted) {
    return (
      <div className={classes}>
        <div className="flex">
          <Button
            classes={spacingClasses}
            small
            altText="Delete"
            clicked={handleDelete}
          >
            <FaTrash />
          </Button>
          <Button
            classes={spacingClasses}
            small
            altText="Restaure"
            clicked={handleRestaure}
          >
            <FaTrashRestore />
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes}>
        <div className="flex">
          <Button classes={spacingClasses} small altText="Remindar">
            <FaRegBell />
          </Button>
          <Button classes={spacingClasses} small altText="Collab">
            <FaUserPlus />
          </Button>
          <PaletteButton
            spacing={spacingClasses}
            small
            change={change}
            altText="Modifier"
          >
            <FaPalette />
          </PaletteButton>
          <Button classes={spacingClasses} small altText="image">
            <FaImage />
          </Button>
          {!archived ? (
            <Button
              classes={spacingClasses}
              small
              clicked={archive}
              altText="Archive"
            >
              <MdArchive />
            </Button>
          ) : (
            <Button
              classes={spacingClasses}
              small
              clicked={unarchive}
              altText="unarchive"
            >
              <MdUnarchive />
            </Button>
          )}
        </div>
      </div>
    );
  }
};

export default NoteOptions;
