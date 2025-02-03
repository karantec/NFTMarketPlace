const NFTs = () => {
  return (
    <div className="p-5 flex flex-wrap gap-5">
      {[1, 2].map((nft) => (
        <div key={nft} className="w-72 bg-white p-4 rounded-lg shadow-lg">
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/300"
            alt="NFT Preview"
          />
          <h2 className="mt-3 font-bold">Felly - Sweet Unknown</h2>
          <p className="text-sm text-gray-500">Current Bid: 0.0005 ETH</p>
          <button className="mt-2 w-full bg-black text-white p-2 rounded">
            Place Bid
          </button>
        </div>
      ))}
    </div>
  );
};

export default NFTs;