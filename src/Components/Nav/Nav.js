import {
  NavContainer,
  LogoImg,
  LogoLink,
  NavInnerContainer,
} from "./Nav.Styles";
import logo from "../../Assets/reactMovie_logo.png";
import Switch from "react-switch";
import { useState } from "react";

function Nav({ theme, themeToggler }) {
  const [checked, setChecked] = useState(false);

  const handelChange = () => {
    setChecked(!checked);
    themeToggler();
  };
  return (
    <NavContainer as={"header"}>
      <NavInnerContainer>
        <LogoLink to={"/"}>
          <LogoImg src={logo} alt={"Logo"} />
        </LogoLink>
        <Switch
        width={65}
        height={33}
          onColor="#888"
          onChange={handelChange}
          checked={checked}
          className="react-switch"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 9,
                color: "#fff",
                paddingRight: 2,
              }}
            >
              night
            </div>
          }
          checkedIcon={
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 9,
              color: "#fff",
              paddingRight: 2,
            }}
          >
            Light
          </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              🔅
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "110%",
                color: "red",
                fontSize: 18,
              }}
            >
              🌙
            </div>
          }
        />
      </NavInnerContainer>
    </NavContainer>
  );
}

export default Nav;
