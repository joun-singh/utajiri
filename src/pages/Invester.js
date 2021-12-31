import React from "react";
import { RecentActivity } from "../components/atom/atoms";
import { ShortInfo } from "../components/molecules/ShortInfo";
import { TabMenu } from "../components/molecules/TabMenu";
import Header from "../components/organism/header/Header";
import { AboutTab } from "../components/templates/AboutTab";
import { AnalyticsTab } from "../components/templates/AnalyticsTab";
import { InvesterTab } from "../components/templates/InvestmentTab";

class Invester extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Analytics",
    };
    this.tabToggler = this.tabToggler.bind(this);
  }

  tabToggler(menu) {
    this.setState({ activeTab: menu });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <div
            className="d-flex justified-between"
            style={{ marginTop: "1.5rem" }}
          >
            <ShortInfo />
            <RecentActivity recentActivity="2 hour" />
          </div>
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <TabMenu tab={activeTab} tabToggler={this.tabToggler} />
          </div>
          <div>
            {(function () {
              if (activeTab === "Investments") {
                return <InvesterTab />;
              } else if (activeTab === "About") {
                return <AboutTab />;
              } else if (activeTab === "Analytics") {
                return <AnalyticsTab />;
              }
            })()}
          </div>
        </div>
      </>
    );
  }
}

export default Invester;
