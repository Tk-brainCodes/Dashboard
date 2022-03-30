import React from "react";
import Userdropdown from "../../assests/sharedicons/userdropdown.svg";
import Notificationicon from "../../assests/sharedicons/notification.svg";
import Iconsearch from "../../assests/sharedicons/icon-search.svg";
import Linedivider from "../../assests/sharedicons/Linedivider.svg";
import '../../styles/layouts/_header.styles.scss';

const Header = () => {
  return (
    <div className="top-header">
      <div className="Search-bar">
        <input
          name="search"
          type="text"
          placeholder="Ask us any question"
          id="search"
        />
        <div className="search-icon">
          <img src={Iconsearch} alt="search-icon" />
        </div>
      </div>
      <div className="Header-Auth">
        <div className="notification">
          <img src={Notificationicon} alt="notification" />
          <div className="badge">3</div>
        </div>
        <img src={Linedivider} alt="divider" />
        <div className="authentication">
          <div className="user-image" />
          <div className="icon-container">
            <img src={Userdropdown} alt="dropdown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
