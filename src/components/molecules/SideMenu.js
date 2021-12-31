import { NavLink } from "react-router-dom";
import { CloseButton } from "../atom/atoms";

export const SideMenu = () => {
  return (
    <div>
      <div className="close">
        <CloseButton />
      </div>
      <div className="d-flex column sidemenu">
        <NavLink to="/crm">CRM</NavLink>

        <NavLink to="analytics">Analytics</NavLink>

        <NavLink to="alliances">Alliances</NavLink>

        <NavLink to="integrations">Integrations</NavLink>

        <NavLink to="mobile">Mobile</NavLink>

        <NavLink to="/extensions">Extensions</NavLink>
      </div>
    </div>
  );
};
