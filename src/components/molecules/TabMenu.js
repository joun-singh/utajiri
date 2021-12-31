import { IconButton } from "../atom/atoms";

let menus = ["Analytics", "Investments", "About"];

export const TabMenu = (props) => {
  return (
    <div className="d-flex tabbutton">
      {menus.map((menu, index) => {
        return (
          <IconButton key={index} handler={() => props.tabToggler(menu)}>
            <p
              className={
                props.tab === menu ? "active line-under" : "text-white"
              }
            >
              {menu}
            </p>
          </IconButton>
        );
      })}
    </div>
  );
};
