import {  Routes, Route } from "react-router-dom";

import NFTs from "./Component/Nft";
import Sidebar from "./Component/Sidebar";
import Topbar from "./Component/TopBar";

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
            </Routes>
          </div>
        </div>
      </div>
    
  );
};

export default App;
