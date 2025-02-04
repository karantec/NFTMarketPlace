import React from "react";
import { FaRegBookmark, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

const NFTCard = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      {/* Image Section */}
      <div className="relative">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
          <FaRegBookmark className="text-gray-500 text-lg" />
        </button>
      </div>

      {/* NFT Details */}
      <div className="mt-4">
        {/* Artist & Verification Badge */}
        <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
          {data.artist}
          {data.isVerified && <FaCheckCircle className="text-blue-500 text-sm" />}
        </div>

        {/* NFT Title */}
        <h3 className="font-semibold text-lg">{data.title}</h3>

        {/* Separator */}
        <hr className="my-2 border-dashed border-gray-300" />

        {/* Price Section */}
        <p className="text-gray-500 text-sm">Price</p>
        <p className="font-semibold text-lg">{data.currentBid}</p>
      </div>

      {/* Buttons Section */}
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-black text-white py-2 px-4 rounded-lg font-medium">
          Buy now
        </button>
        <button className="bg-gray-100 p-2 rounded-lg shadow">
          <FaShoppingCart className="text-xl text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
