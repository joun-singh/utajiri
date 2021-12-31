import { Card } from "../atom/atoms";
import UserBio from "../organism/userBio/UserBio";

export const AboutTab = () => {
  return (
    <Card width="1200px" classes="d-flex center ma p-1">
      <UserBio tab="true" />
    </Card>
  );
};
