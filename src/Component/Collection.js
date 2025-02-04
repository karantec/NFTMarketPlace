import React, { useState } from 'react';
import { Search } from 'lucide-react';

const CollectionsTable = () => {
  
  const collections = [
    {
      id: 1,
      name: "Doodles",
      image: "/api/placeholder/40/40",
      floorPrice: "1.219 ETH",
      floorChange: "+2.5%",
      volume: "438.3 ETH",
      volumeChange: "-38.5%",
      items: "21.9k",
      owners: "10.4k"
    },
    {
      id: 2,
      name: "Pudgy Penguins",
      image: "/api/placeholder/40/40",
      floorPrice: "1.219 ETH",
      floorChange: "+2.5%",
      volume: "438.3 ETH",
      volumeChange: "-38.5%",
      items: "21.9k",
      owners: "10.4k"
    },
    {
      id: 3,
      name: "Lil Pudgys",
      image: "/api/placeholder/40/40",
      floorPrice: "1.219 ETH",
      floorChange: "+2.5%",
      volume: "438.3 ETH",
      volumeChange: "-38.5%",
      items: "21.9k",
      owners: "10.4k"
    },
    {
        id: 1,
        name: "Doodles",
        image: "/api/placeholder/40/40",
        floorPrice: "1.219 ETH",
        floorChange: "+2.5%",
        volume: "438.3 ETH",
        volumeChange: "-38.5%",
        items: "21.9k",
        owners: "10.4k"
      },
      {
        id: 2,
        name: "Pudgy Penguins",
        image: "/api/placeholder/40/40",
        floorPrice: "1.219 ETH",
        floorChange: "+2.5%",
        volume: "438.3 ETH",
        volumeChange: "-38.5%",
        items: "21.9k",
        owners: "10.4k"
      },
      {
        id: 3,
        name: "Lil Pudgys",
        image: "/api/placeholder/40/40",
        floorPrice: "1.219 ETH",
        floorChange: "+2.5%",
        volume: "438.3 ETH",
        volumeChange: "-38.5%",
        items: "21.9k",
        owners: "10.4k"
      },
      {
        id: 1,
        name: "Doodles",
        image: "/api/placeholder/40/40",
        floorPrice: "1.219 ETH",
        floorChange: "+2.5%",
        volume: "438.3 ETH",
        volumeChange: "-38.5%",
        items: "21.9k",
        owners: "10.4k"
      },
      {
        id: 2,
        name: "Pudgy Penguins",
        image: "/api/placeholder/40/40",
        floorPrice: "1.219 ETH",
        floorChange: "+2.5%",
        volume: "438.3 ETH",
        volumeChange: "-38.5%",
        items: "21.9k",
        owners: "10.4k"
      },
      {
        id: 3,
        name: "Lil Pudgys",
        image: "/api/placeholder/40/40",
        floorPrice: "1.219 ETH",
        floorChange: "+2.5%",
        volume: "438.3 ETH",
        volumeChange: "-38.5%",
        items: "21.9k",
        owners: "10.4k"
      }
  ];



  return (
    <div className="p-6">
      {/* Pass activeTab state and handleTabChange to TabNavigation */}
      {/* <TabNavigation onTabChange={handleTabChange} activeTab={activeTab} /> */}

      {/* Search and Filters */}
      <div className="flex justify-between mb-6">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for Collections"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none"
          />
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 outline-none">
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
          <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 relative">
            Filter
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-sm text-left">
              <th className="pb-4 font-medium">#</th>
              <th className="pb-4 font-medium">Collection Name</th>
              <th className="pb-4 font-medium">Floor Price</th>
              <th className="pb-4 font-medium">Floor Change</th>
              <th className="pb-4 font-medium">Volume</th>
              <th className="pb-4 font-medium">Volume Change</th>
              <th className="pb-4 font-medium">Items</th>
              <th className="pb-4 font-medium">Owners</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {collections.map((collection) => (
              <tr key={collection.id} className="hover:bg-gray-50">
                <td className="py-4 text-sm">{collection.id}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-10 h-10 rounded-lg"
                    />
                    <span className="font-medium">{collection.name}</span>
                  </div>
                </td>
                <td className="py-4">{collection.floorPrice}</td>
                <td className="py-4 text-green-500">{collection.floorChange}</td>
                <td className="py-4">{collection.volume}</td>
                <td className="py-4 text-red-500">{collection.volumeChange}</td>
                <td className="py-4">{collection.items}</td>
                <td className="py-4">{collection.owners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollectionsTable;
