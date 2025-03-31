import React from "react";

function Navbar({ tabs, activeTab, onTabClick, setSelectedProject }) {
  return (
    <nav className="navbar">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => {
              onTabClick(tab);
              setSelectedProject(null);
            }}
            className={tab === activeTab ? "nav-item active" : "nav-item"}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
