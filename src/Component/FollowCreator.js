import React from 'react';
import { Search } from 'lucide-react';

const FollowCreators = () => {
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
    }
    // ... other collection items
  ];

  return (
    <div className="w-full">
      {/* Header with Search and Filter */}
      <div className="flex items-center justify-between mb-6 bg-gray-50 rounded-lg p-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search for Collections"
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="ml-4 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none">
          <option>Newest first</option>
          <option>Oldest first</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-600 border-b border-gray-200">
              <th className="py-3 text-left font-medium">#</th>
              <th className="py-3 text-left font-medium">Collection Name</th>
              <th className="py-3 text-left font-medium">Floor Price</th>
              <th className="py-3 text-left font-medium">Floor Change</th>
              <th className="py-3 text-left font-medium">Volume</th>
              <th className="py-3 text-left font-medium">Volume Change</th>
              <th className="py-3 text-left font-medium">Items</th>
              <th className="py-3 text-left font-medium">Owners</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {collections.map((collection) => (
              <tr key={collection.id} className="hover:bg-gray-50">
                <td className="py-4 text-sm">{collection.id}</td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-8 h-8 rounded-lg"
                    />
                    <span className="font-medium text-sm">{collection.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm">{collection.floorPrice}</td>
                <td className="py-4 text-sm text-green-500">{collection.floorChange}</td>
                <td className="py-4 text-sm">{collection.volume}</td>
                <td className="py-4 text-sm text-red-500">{collection.volumeChange}</td>
                <td className="py-4 text-sm">{collection.items}</td>
                <td className="py-4 text-sm">{collection.owners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FollowCreators;