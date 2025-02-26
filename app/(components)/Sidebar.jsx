"use client";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("users");

  const menuItems = [
    { id: "dashboard", icon: "grid", label: "Dashboard" },
    { id: "orders", icon: "shopping-bag", label: "Orders", highlight: true },
    { id: "wallet", icon: "wallet", label: "Wallet" },
    { id: "menu", icon: "book-open", label: "Menu" },
    { id: "support", icon: "headphones", label: "Support" },
    { id: "users", icon: "users", label: "User / Staff" },
    { id: "log", icon: "eye", label: "Customers Log" },
    { id: "settings", icon: "settings", label: "Setting" },
  ];

  const bottomItems = [
    { id: "feedback", icon: "star", label: "Feedback" },
    { id: "logout", icon: "log-out", label: "Logout" },
    { id: "help", icon: "help-circle", label: "Help" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg"
            alt="Qtap Logo"
            className="h-10"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/${item.id === "dashboard" ? "" : item.id}`}
                className={`
                  flex items-center px-3 py-2 rounded-md text-sm font-medium
                  ${
                    activeItem === item.id
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                  ${
                    item.highlight
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:text-white"
                      : ""
                  }
                `}
                onClick={() => setActiveItem(item.id)}>
                <span className="text-center w-6 mr-3">
                  <i data-feather={item.icon} className="w-5 h-5" />
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-1">
          {bottomItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/${item.id}`}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <span className="text-center w-6 mr-3">
                  <i data-feather={item.icon} className="w-5 h-5" />
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
