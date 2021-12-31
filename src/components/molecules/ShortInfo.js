import BackIcon from "../../assets/icon/BackIcon.svg";
import { IconButton, Image, ImageThumbnail } from "../atom/atoms";
import users from "../../assets/users.png";

export const ShortInfo = () => {
  return (
    <div className="d-flex" style={{ columnGap: "0.7rem" }}>
      <div>
        <IconButton>
          <Image>{BackIcon}</Image>
        </IconButton>
      </div>
      <div>
        <ImageThumbnail width="60px" height="60px">
          {users}
        </ImageThumbnail>
      </div>
      <div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};
