import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TabNavigation = ({ onTabChange, activeTab }) => {
    const tabs = [
      { name: 'NFTs', path: '/nfts' },
      { name: 'Collections', path: '/collections' },
      { name: 'Creators', path: '/creators' },
     
    ];
  
    const handleTabClick = (path, name) => {
      onTabChange(name);  // Trigger parent component's tab change handler
    };
  
    return (
      <div className="border-b mb-6">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab.path, tab.name)}
              className={`pb-4 px-1 ${
                activeTab === tab.name
                  ? 'border-b-2 border-black font-medium'
                  : 'text-gray-500'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default TabNavigation;
