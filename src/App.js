import {  Routes, Route } from "react-router-dom";

import NFTs from "./Component/Nft";
import Sidebar from "./Component/Sidebar";
import Topbar from "./Component/TopBar";
import ShoppingCart from "./Component/Cart";
import ActiveBids from "./Component/Bid";
import CollectionsTable from "./Component/Collection";
import FavouritePage from "./Component/Favourite";
import FavouritePlace from "./Component/Favourite";

const App = () => {
  return (
    
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation Bar */}
          <Topbar />

          {/* Main Content Area */}
          <div className="p-5">
            <Routes>
              <Route path="/" element={<NFTs />} />
              <Route path="/Favourite" element={<FavouritePlace/>}/>
              {/* <Route path="/collections" element={<CollectionsTable />} /> */}
              <Route path="/cart"  element={<ShoppingCart/>}/>
              <Route path="/bids"  element={<ActiveBids/>}/>
            </Routes>
          </div>
        </div>
      </div>
    
  );
};

export default App;
