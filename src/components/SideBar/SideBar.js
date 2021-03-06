import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { MdLightbulbOutline, MdLabelOutline, MdEdit } from 'react-icons/md';
import { BsBell, BsTrash } from 'react-icons/bs';
import { FaArchive } from 'react-icons/fa';
import TitledButton from './../../UI/TitledButton/TitledButton';
import { Link } from 'react-router-dom';
import KeepContext from './../../context/KeepContext';

const SideBar = ({ classes, isExpanded, location }) => {
  const { labels, startEdit } = useContext(KeepContext);

  const isActive = path => {
    return location.pathname === path;
  };

  return (
    <div className={classes}>
      <div className="flex flex-col h-screen h-full bg-white">
        <div>
          <Link to="/home">
            <TitledButton
              label="Note"
              isExpanded={isExpanded}
              isActive={isActive('/home') ? true : false}
            >
              <MdLightbulbOutline size="1.5em" />
            </TitledButton>
          </Link>
          <Link to="/reminders">
            <TitledButton
              label="Reminders"
              isExpanded={isExpanded}
              isActive={isActive('/reminders') ? true : false}
            >
              <BsBell size="1.5em" />
            </TitledButton>
          </Link>
          {/* {labels.map(label => {
            return (
              <Link to={`/label/${label}`} key={label}>
                <TitledButton
                  label={label}
                  isExpanded={isExpanded}
                  isActive={isActive(`/label/${label}`) ? true : false}
                >
                  <MdLabelOutline size="1.5em" />
                </TitledButton>
              </Link>
            );
          })} */}

          <div onClick={startEdit}>
            <TitledButton label="Modife" isExpanded={isExpanded}>
              <MdEdit size="1.5em" />
            </TitledButton>
          </div>
          <Link to="/archive">
            <TitledButton
              label="Archive"
              isExpanded={isExpanded}
              isActive={isActive('/archive') ? true : false}
            >
              <FaArchive size="1.5em" />
            </TitledButton>
          </Link>

          <Link to="/trash">
            <TitledButton
              label="Trash"
              isExpanded={isExpanded}
              isActive={isActive('/trash') ? true : false}
            >
              <BsTrash size="1.5em" />
            </TitledButton>
          </Link>
        </div>
    
      </div>
    </div>
  );
};

export default withRouter(SideBar);
