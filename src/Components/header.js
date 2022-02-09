import { Nav, NavItem, NavLink } from "reactstrap";
export default function Header() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand">CredConsulting</h2>
        <div className="navbar-nav">
          <NavItem>
            <NavLink active href="#">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </div>
      </div>
    </Nav>
  );
}
