import { InlineLabel, Image, Input } from "../atom/atoms";
import SearchIcon from "../../assets/icon/SearchIcon.svg";

export const SearchBox = () => {
  return (
    <div>
      <InlineLabel classes={"mr-1"}>
        <Image>{SearchIcon}</Image>
      </InlineLabel>
      <Input type="text" name="search" value="Search" />
    </div>
  );
};
