import React from 'react';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      title: "Felly - Sweet Unknown",
      artist: "Departed",
      price: "0.1221 ETH",
      dollarPrice: "100.12",
      isVerified: true,
      imageUrl: "/api/placeholder/160/120"
    },
    // Repeated items for demo
    {
      id: 2,
      title: "Felly - Sweet Unknown",
      artist: "Departed",
      price: "0.1221 ETH",
      dollarPrice: "100.12",
      isVerified: true,
      imageUrl: "/api/placeholder/160/120"
    },
    {
      id: 3,
      title: "Felly - Sweet Unknown",
      artist: "Departed",
      price: "0.1221 ETH",
      dollarPrice: "100.12",
      isVerified: true,
      imageUrl: "/api/placeholder/160/120"
    },
    {
        id: 1,
        title: "Felly - Sweet Unknown",
        artist: "Departed",
        price: "0.1221 ETH",
        dollarPrice: "100.12",
        isVerified: true,
        imageUrl: "/api/placeholder/160/120"
      },
      // Repeated items for demo
      {
        id: 2,
        title: "Felly - Sweet Unknown",
        artist: "Departed",
        price: "0.1221 ETH",
        dollarPrice: "100.12",
        isVerified: true,
        imageUrl: "/api/placeholder/160/120"
      },
      {
        id: 3,
        title: "Felly - Sweet Unknown",
        artist: "Departed",
        price: "0.1221 ETH",
        dollarPrice: "100.12",
        isVerified: true,
        imageUrl: "/api/placeholder/160/120"
      }
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-medium mb-6">Cart</h2>
      
      <div className="flex gap-8">
        {/* Cart Items List */}
        <div className="flex-grow">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-40 h-24 object-cover rounded-lg"
                />
                <div className="flex flex-grow items-center ml-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{item.title}</h3>
                      {item.isVerified && (
                        <span className="text-blue-500">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">{item.artist}</p>
                  </div>
                  
                  <div className="text-right mr-6">
                    <p className="font-medium">{item.price}</p>
                    <p className="text-gray-500 text-sm">${item.dollarPrice}</p>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                      Add to favourites
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                      Save for later
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="w-80">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Final checkout</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Items</span>
                <span className="font-medium">Price</span>
              </div>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex justify-between text-sm text-gray-600">
                  <span>Item {num}</span>
                  <span>0.001ETH</span>
                </div>
              ))}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <div className="text-right">
                    <div>0.005ETH</div>
                    <div className="text-sm text-gray-500">($ 10.22)</div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800 font-medium">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;