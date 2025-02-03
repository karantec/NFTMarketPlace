import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-white shadow-md">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for NFTs, Collections, creators"
          className="bg-transparent w-full outline-none text-gray-700"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <div className="relative">
          <IoNotificationsOutline size={24} className="text-gray-700" />
          <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
        </div>

        {/* Buy Coins Button */}
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Buy NYWNFT coins
        </button>

        {/* ETH Balance */}
        <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
          <FaEthereum className="mr-1" />
          <span>0.12 ETH</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
