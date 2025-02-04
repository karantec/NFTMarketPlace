import React, { useState } from "react";
import { Search } from "lucide-react";
import TabNavigation from "./TabNavigation";

const creatorsData = [
  {
    id: 1,
    name: "YFI FAN",
    followers: "31.9K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
  {
    id: 2,
    name: "Alpha7Music",
    followers: "25.3K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
  {
    id: 3,
    name: "OCENE",
    followers: "25.1K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
  {
    id: 4,
    name: "LIRONA",
    followers: "24.6K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
  {
    id: 1,
    name: "YFI FAN",
    followers: "31.9K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
  {
    id: 2,
    name: "Alpha7Music",
    followers: "25.3K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
  {
    id: 3,
    name: "OCENE",
    followers: "25.1K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
  {
    id: 4,
    name: "LIRONA",
    followers: "24.6K",
    imageUrl:
      "https://www.shutterstock.com/image-illustration/robot-crash-test-dummy-sitting-600nw-2051238215.jpg",
  },
];

const CreatorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCreators = creatorsData.filter((creator) =>
    creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Tab Navigation */}

      {/* Content based on active tab */}

      <>
        {/* Search Bar */}
        <div className="relative w-full mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for Creators"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none"
          />
        </div>

        {/* Creator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className="border rounded-lg p-4 shadow-md bg-white flex flex-col items-center"
            >
              <img
                src={creator.imageUrl}
                alt={creator.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{creator.name}</h3>
              <p className="text-gray-500">{creator.followers} followers</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                + Follow
              </button>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default CreatorsPage;
