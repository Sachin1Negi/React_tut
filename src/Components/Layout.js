import { Outlet, Link } from "react-router-dom";

//This is writing at the web
// Here we have the HyperLinks available at the web.
// The flow will be : Click on Home -> the route 'localhost:3000/' will be called -> the given link has
// component <Info /> mapped to it.
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;