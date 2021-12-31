import React from "react";
import "./App.css";
import Envelope from "./assets/icon/Envelope.svg";
import Trash from "./assets/icon/Trash.svg";
import {
  BlockLabel,
  Button,
  IconButton,
  Image,
  ImageThumbnail,
  InlineLabel,
  Card,
} from "./components/atom/atoms";
import { SearchBox } from "./components/molecules/SearchBox";
import user from "./assets/img.jpg";
import Router from "./Router";
import Dashboard from "./pages/Dashboad";

const App = () => {
  return (
    <Router />
    // <div className="App">
    //   <Button variant="contained">
    //     <Image alt="Envelope">{Envelope}</Image>

    //     <InlineLabel classes={"ml-1"}>Invite Members</InlineLabel>
    //   </Button>
    //   <div style={{ fontSize: "20px", fontWeight: "300" }}>
    //     <BlockLabel>Investor</BlockLabel>
    //   </div>
    //   <div className="">
    //     <InlineLabel>Inline text</InlineLabel>
    //     <InlineLabel>Inline text</InlineLabel>
    //     <InlineLabel>Inline text</InlineLabel>
    //   </div>
    //   <InlineLabel>
    //     <IconButton>
    //       <Image alt="trash">{Trash}</Image>
    //     </IconButton>
    //   </InlineLabel>
    //   <InlineLabel>
    //     <IconButton>
    //       <Image alt="trash">{Trash}</Image>
    //     </IconButton>
    //   </InlineLabel>
    //   <InlineLabel>
    //     <IconButton>
    //       <Image alt="trash">{Trash}</Image>
    //     </IconButton>
    //   </InlineLabel>

    //   <SearchBox></SearchBox>
    //   <Card width="200px" text="center">
    //     <ImageThumbnail width="60px" height="60px" border="2px solid red">
    //       {user}
    //     </ImageThumbnail>
    //     <BlockLabel>Joun pratap singh</BlockLabel>
    //     <BlockLabel>jounpratap.singh@hmail.com</BlockLabel>
    //   </Card>
    //   <BlockLabel>
    //     <div className="ham-icon"></div>
    //     <div className="ham-icon"></div>
    //     <div className="ham-icon"></div>
    //   </BlockLabel>
    // </div>
  );
};

export default App;
