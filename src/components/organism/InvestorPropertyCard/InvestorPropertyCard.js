import { Card } from "../../atom/atoms";
import "./InvestorPropertyCard.css";
import property from "../../../assets/property.png";
import LocationIcon from "../../../assets/icon/LocationIcon.svg";
import { Image } from "../../atom/atoms";

export const InvestorPropertyCard = () => {
  return (
    <Card width="380px">
      <Image>{property}</Image>
      <div style={{ padding: "0 20px 20px 20px" }}>
        <p>2BHK large designer apartment with terrace</p>
        <div className="mb-1">
          <span className="mr-1">
            <Image>{LocationIcon}</Image>
          </span>
          <span>California</span>
        </div>
        <div className="d-flex justified-between mb-1">
          <div className="active">$25000</div>
          <div>
            <span className="active">6.5%</span> Return{" "}
          </div>
        </div>
        <div className="d-flex justified-between mb-1">
          <div>invested on:</div>
          <div className="active">21/12/2021</div>
        </div>
        <div className="d-flex justified-between mb-1">
          <div>Current value</div>
          <div className="active">$30000</div>
        </div>
      </div>
    </Card>
  );
};
