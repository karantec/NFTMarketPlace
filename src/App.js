import {  Routes, Route } from "react-router-dom";

import NFTs from "./Component/Nft";
import Sidebar from "./Component/Sidebar";
import Topbar from "./Component/TopBar";
import ShoppingCart from "./Component/Cart";
import ActiveBids from "./Component/Bid";
import CreateMasterpiece from "./Component/CreateNff";

import FavouritePlace from "./Component/Favourite";

const App = () => {
  return (
     <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar /> 
         
        <div className="flex-1 flex flex-col">
          <Topbar />
          <div className="p-5">
            <Routes>
              <Route path="/" element={<NFTs />} />
              <Route path="/Favourite" element={<FavouritePlace/>}/>
              <Route path="/CreateNff" element={<CreateMasterpiece/>}/>
              <Route path="/cart"  element={<ShoppingCart/>}/>
              <Route path="/bids"  element={<ActiveBids/>}/>
            </Routes>
          </div>
        </div>
        
      </div>
      
     
      </>
    
  );
};

export default App;
