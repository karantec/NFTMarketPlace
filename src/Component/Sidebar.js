import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaGavel,
  FaPlusSquare,
  FaCog,
  FaChevronLeft,
  FaBars,
} from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-3 fixed top-5 left-5 bg-black text-white rounded-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed md:relative top-0 left-0 w-64 h-screen bg-gray-50 p-5 flex flex-col shadow-lg rounded-r-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        {/* Close Button for Mobile */}
        <button
          className="md:hidden absolute top-5 right-5 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">NYWNFT</h1>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link className="flex items-center space-x-3 p-3 bg-black text-white rounded-lg" to="/">
            <MdOutlineDashboard size={20} />
            <span>Marketplace</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-gray-600 hover:text-black" to="/favourite">
            <FaHeart size={18} />
            <span>Favourites</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-gray-600 hover:text-black" to="/cart">
            <FaShoppingCart size={18} />
            <span>Cart</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-gray-600 hover:text-black" to="/bids">
            <FaGavel size={18} />
            <span>Current Bids</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-gray-600 hover:text-black" to="/CreateNff">
            <FaPlusSquare size={18} />
            <span>Create NFT</span>
          </Link>
        </nav>

        {/* Divider */}
        <div className="border-t my-5"></div>

        {/* Support & Settings */}
        <div className="space-y-4">
          <Link className="flex items-center space-x-3 p-3 text-gray-600 hover:text-black" to="/help">
            <IoHelpCircleOutline size={20} />
            <span>Help & Support</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-gray-600 hover:text-black" to="/settings">
            <FaCog size={18} />
            <span>Settings</span>
          </Link>
        </div>

        {/* Profile Section */}
        <div className="mt-auto flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Samarpit Jain</p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
