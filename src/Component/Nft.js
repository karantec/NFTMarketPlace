import React, { useState } from "react";
import { Search } from "lucide-react";
import TabNavigation from "./TabNavigation";
import CollectionsTable from "./Collection";
import NFTCard from "./NftCard";
import CreatorsPage from "./Creatorpage";
import SwiperComponent from "./SwiperComponent";

const MarketplacePage = () => {
  const [activeTab, setActiveTab] = useState("NFTs");
  const [selectedPrice, setSelectedPrice] = useState("Price Low to High");

  const nftData = [
    {
      id: 1,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 2,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 1,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 2,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 1,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 2,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 2,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 1,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    {
      id: 2,
      title: "Felly - Sweet Unknown",
      artist: "Departed161",
      currentBid: "0.0005 ETH",
      yourBid: "0.00055 ETH",
      volume: "12 ETH",
      imageUrl:
        "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
      isVerified: true,
    },
    
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
   
   
    <div className="p-6">
      {/* Fixed Tab Navigation */}
      
      <TabNavigation onTabChange={handleTabChange} activeTab={activeTab} />

      {/* Show search bar & filters only for NFTs tab */}
      {activeTab === "NFTs" && (
        <div className="flex gap-4 mb-6 mt-6">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for NFTs"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none"
            />
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
              Categories
            </button>
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 outline-none"
            >
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
            <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 relative">
              Filter
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>
      )}

      {/* Display content based on active tab */}
      {activeTab === "NFTs" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nftData.map((nft) => (
            <NFTCard key={nft.id} data={nft} />
          ))}
        </div>
      )}

      {activeTab === "Collections" && <CollectionsTable />}
      {activeTab === "Creators" && <CreatorsPage />}
    </div>
    </>
  );
};

export default MarketplacePage;
