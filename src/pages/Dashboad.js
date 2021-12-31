import React from "react";
import InvestmentInfo from "../components/molecules/InvestmentInfo";
import Header from "../components/organism/header/Header";
import Money from "../assets/icon/Money.svg";
import MoneyBottom from "../assets/icon/MoneyBottom.svg";
import { SideMenu } from "../components/molecules/SideMenu";
import UserBio from "../components/organism/userBio/UserBio";
import { InvestorPropertyCard } from "../components/organism/InvestorPropertyCard/InvestorPropertyCard";
import { ShortInfo } from "../components/molecules/ShortInfo";
import { RecentActivity } from "../components/atom/atoms";
import { TabMenu } from "../components/molecules/TabMenu";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <InvestmentInfo
          icon={Money}
          heading={300000}
          description="this is description"
        />
        <SideMenu />
        <UserBio />
        <InvestorPropertyCard />
        <ShortInfo />
        <RecentActivity recentActivity="2 hours" />
        <TabMenu />
      </div>
    );
  }
}

export default Dashboard;
