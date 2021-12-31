import React from "react";
import { BlockLabel, Image, InlineLabel } from "../../atom/atoms";

import NotificationBell from "../../../assets/icon/Notificationbell.svg";
import DownAngle from "../../../assets/icon/DownAngle.svg";
import userPhoto from "../../../assets/users.png";
import Nav from "../../molecules/Nav";
import { BrandImage } from "../../molecules/BrandImage";

const Header = () => {
  return (
    <div style={{ borderBottom: "1px solid #fff", padding: "10px" }}>
      <div className="d-flex container">
        <BlockLabel>
          <div className="ham-icon"></div>
          <div className="ham-icon"></div>
          <div className="ham-icon"></div>
        </BlockLabel>
        <BrandImage />
        <Nav />
        <BlockLabel classes="d-flex last header-userblock">
          <BlockLabel>
            <Image>{NotificationBell}</Image>
          </BlockLabel>
          <BlockLabel>
            <Image width="35px" height="35px">
              {userPhoto}
            </Image>
          </BlockLabel>
          <BlockLabel>
            <InlineLabel>John Doe</InlineLabel>
            <Image classes="ml-1">{DownAngle}</Image>
          </BlockLabel>
        </BlockLabel>
      </div>
    </div>
  );
};

export default Header;
