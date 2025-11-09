import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/userinfo", {
      method: "GET",
      credentials: "include", // send cookies
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        } else {
          console.log("User not logged in");
        }
      })
      .catch((err) => console.error("Error fetching user info:", err));
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        alert("Logged out successfully!");
        window.location.href = "http://localhost:5173/"; // redirect to login
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (!user) return <h3>Loading...</h3>;

  // CSS class management
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img className="logo" src="logo.png" alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile Section */}
        <div className="profile" style={{ position: "relative" }}>
          <div
            className="avatar"
            style={{ cursor: "pointer" }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {user.username ? user.username.charAt(0).toUpperCase() : "U"}
          </div>
          <p
            className="username"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ cursor: "pointer" }}
          >
            {user.username || "USERID"}
          </p>

          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                width: "160px",
                zIndex: 10,
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li
                  style={{ padding: "10px 15px", cursor: "pointer" }}
                  onClick={() => alert("Profile clicked")}
                >
                  Profile
                </li>
                <li
                  style={{ padding: "10px 15px", cursor: "pointer" }}
                  onClick={() => alert("Settings clicked")}
                >
                  Settings
                </li>
                <li
                  style={{
                    padding: "10px 15px",
                    color: "red",
                    borderTop: "1px solid #eee",
                    cursor: "pointer",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
