import InvestmentInfo from "../molecules/InvestmentInfo";
import Money from "../../assets/icon/Money.svg";

export const AnalyticsTab = () => {
  return (
    <div className="d-flex" style={{ gap: "20px" }}>
      <InvestmentInfo
        icon={Money}
        heading={300000}
        description="this is description"
      />
      <InvestmentInfo
        icon={Money}
        heading={300000}
        description="this is description"
      />
      <InvestmentInfo
        icon={Money}
        heading={300000}
        description="this is description"
      />
    </div>
  );
};
