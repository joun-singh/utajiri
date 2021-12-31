import Logo from "../../assets/Logo.svg";
import { BlockLabel, Image } from "../atom/atoms";

export const BrandImage = () => {
  return (
    <BlockLabel classes="ml-3">
      <Image>{Logo}</Image>
    </BlockLabel>
  );
};
