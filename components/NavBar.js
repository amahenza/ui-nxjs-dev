import NavButton from "./elements/NavButton";

const NavBar = (props) => (
  <div className="NavBar">
    {props.navButtons.map((button) => (
      <NavButton key={button.path} path={button.path} label={button.label} />
    ))}
    <style jsx>{`
      background-color: grey;
      color: white;
      width: 100%;
      height: 90px;
    `}</style>
  </div>
);

export default NavBar;
