import React from "react";
import "./atom.css";
import CrossIcon from "../../assets/icon/CrossIcon.svg";

export const Button = (props) => {
  let classes = "";
  if (props.variant === "contained") {
    classes += "btn btn-contained";
  } else if (props.variant === "outlined") {
    classes = "btn btn-outlined";
  } else {
    classes = "btn";
  }

  return <button className={classes}>{props.children}</button>;
};

export const IconButton = (props) => {
  return (
    <button className="btn-transparent" key={props.key} onClick={props.handler}>
      {props.children}
    </button>
  );
};

export const BlockLabel = (props) => {
  return <div className={props.classes}>{props.children}</div>;
};

export const InlineLabel = (props) => {
  return (
    <span className={props.classes ? props.classes : ""}>{props.children}</span>
  );
};

export const Image = (props) => {
  return <img src={props.children} alt={props.alt} className={props.classes} />;
};

export const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      className={props.classes}
    />
  );
};

export const ImageThumbnail = (props) => {
  return (
    <img
      src={props.children}
      width={props.width}
      height={props.height}
      style={{
        borderRadius: props.radius ? props.radius : "unset",
        border: props.border ? props.border : "",
      }}
      alt={props.alt}
    />
  );
};

export const Card = (props) => {
  return (
    <div
      className={props.classes ? "card " + props.classes : "card"}
      style={{
        width: props.width,
        height: props.height,
        textAlign: props.text,
      }}
    >
      {props.children}
    </div>
  );
};

export const CloseButton = () => {
  return (
    <button className="btn-transparent">
      <Image>{CrossIcon}</Image>
    </button>
  );
};

export const RecentActivity = (props) => {
  return (
    <p style={{ fontSize: "1.4rem" }}>
      Recent Activity: <span className="active">{props.recentActivity}</span>
    </p>
  );
};
