import { CloseButton, Image, ImageThumbnail } from "../../atom/atoms";
import userPhoto from "../../../assets/users.png";
import "./userBio.css";

const UserBio = (props) => {
  return (
    <div>
      {!props.tab && (
        <div className="close">
          <CloseButton />
        </div>
      )}

      <div className="d-flex bio-head">
        <div className="bio-photo">
          <ImageThumbnail width="200px" height="200px">
            {userPhoto}
          </ImageThumbnail>
        </div>
        <div className="bio-desc">
          <h2>Bio</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        {props.tab && (
          <div className="bio-addresh">
            <div>
              <p>
                {" "}
                <span>
                  <Image>userPhoto</Image>
                </span>
                <span>EmailID</span>
              </p>
              <p>Email@gmail.com</p>
            </div>
            <div>
              <p>
                <span>
                  <Image>userPhoto</Image>
                </span>
                <span>Country</span>
              </p>
              <p>California</p>
            </div>
          </div>
        )}
      </div>
      <div>
        {!props.tab && (
          <div className="d-flex bio-middle">
            <div className="bio-photo">
              <h2>User name</h2>
            </div>
            <div className="bio-desc">
              <div>
                <p>
                  <span>
                    <Image>userPhoto</Image>
                  </span>
                  <span>EmailID</span>
                </p>
                <p>Email@gmail.com</p>
              </div>
            </div>
            <div className="bio-addresh">
              <p>
                <span>
                  <Image>userPhoto</Image>
                </span>
                <span>Country</span>
              </p>
              <p>California</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="d-flex bio-middle">
          <div className="bio-photo">
            <p>Investors Id</p>
            <p>#232242</p>
          </div>
          <div className="bio-desc">
            <div>
              <p>Company</p>
              <p>XYZ PVT LTD</p>
            </div>
          </div>
          <div className="bio-addresh">
            <p>Joined Date</p>
            <p>xx/xx/xxx</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
