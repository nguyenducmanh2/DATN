import {
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

import { Outlet, Link, useNavigate, useLocation ,Navigate} from "react-router-dom";
import { useAuth } from "./../main";

export default function Root() {
  let authStore = useAuth();
  
  const logoutPage = () => {
    authStore.signout(navigate("/"));
  };
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/DashBoard`}>
                <DashboardOutlined style={{ fontSize: "16px", color: "red" }} />
                DashBoard
              </Link>
            </li>
            <li>
              <Link to={`/Form`}>
                <SettingFilled style={{ fontSize: "16px", color: "blue" }} />
                Form
              </Link>
            </li>
            <li>
              <Link to={`/Table`}>
                <SmileOutlined style={{ fontSize: "16px", color: "green" }} />
                Table
              </Link>
            </li>
            <li>
              <Link to={`/ListUser`}>
                <SyncOutlined style={{ fontSize: "16px", color: "black" }} />
                List User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet></Outlet>
      </div>
    </>
  );
}
