import React from "react";
import { Card, Image, ImageThumbnail } from "../atom/atoms";

const InvestmentInfo = (props) => {
  return (
    <Card width="380px" height="168px" text="center" classes="d-flex center">
      <div className="d-flex center icon-container">
        <ImageThumbnail width="33px" height="22px" alt="money">
          {props.icon}
        </ImageThumbnail>
      </div>
      <div>
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default InvestmentInfo;
