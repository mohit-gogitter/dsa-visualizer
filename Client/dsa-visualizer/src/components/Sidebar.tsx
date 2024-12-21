import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gradient-to-r from-gray-900 to-gray-800 text-white h-screen p-6 shadow-lg">
      <div className="mb-8">
        <NavLink
          to="/"
          className="text-3xl font-semibold text-gray-100 hover:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          Algorithms
        </NavLink>
      </div>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/sorting"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 rounded-lg bg-gray-700 text-gray-200 transition-all duration-300 ease-in-out transform scale-105"
                : "flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-200 hover:scale-105"
            }
          >
            <span className="mr-3 text-xl">🧮</span> Sorting
          </NavLink>
        </li>
        {/* Added Searching Link */}
        <li>
          <NavLink
            to="/searching"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 rounded-lg bg-gray-700 text-gray-200 transition-all duration-300 ease-in-out transform scale-105"
                : "flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-200 hover:scale-105"
            }
          >
            <span className="mr-3 text-xl">🔍</span> Searching
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pathfinding"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 rounded-lg bg-gray-700 text-gray-200 transition-all duration-300 ease-in-out transform scale-105"
                : "flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-200 hover:scale-105"
            }
          >
            <span className="mr-3 text-xl">🗺️</span> Pathfinding
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trees"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 rounded-lg bg-gray-700 text-gray-200 transition-all duration-300 ease-in-out transform scale-105"
                : "flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-200 hover:scale-105"
            }
          >
            <span className="mr-3 text-xl">🌳</span> Trees
          </NavLink>
        </li>
        {/* Added Linked List Link */}
        <li>
          <NavLink
            to="/linked-list"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-4 py-2 rounded-lg bg-gray-700 text-gray-200 transition-all duration-300 ease-in-out transform scale-105"
                : "flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-gray-200 hover:scale-105"
            }
          >
            <span className="mr-3 text-xl">🔗</span> Linked List
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
