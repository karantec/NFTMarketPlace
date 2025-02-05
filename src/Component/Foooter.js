import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo & Description */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold">NYWNFT</h2>
          <p className="text-sm text-gray-600 mt-2">
            Ever dreamt of being part of the New York World? NYWNFTs, the bridge between Blockchain 
            and AI, lets you own a piece of the action. Generate and mint NFTs, unlocking the future 
            of creativity in the heart of the world.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Ventures</li>
          </ul>
        </div>

        {/* Learn about NFTs */}
        <div>
          <h3 className="font-semibold mb-2">Learn about NFTs</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>What is NFT?</li>
            <li>How to buy NFTs from NYWNFT?</li>
            <li>How to create / mint NFTs on NYWNFT?</li>
            <li>How to sell NFTs on NYWNFT?</li>
            <li>What is a Crypto wallet?</li>
            <li>What is NYWNFT Coin?</li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="font-semibold mb-2">Connect with us</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>📌 Discord</li>
            <li>📌 Telegram</li>
            <li>📌 X App</li>
            <li>📧 nywnft@nywnft.xyz</li>
          </ul>
        </div>

        {/* Stay in Loop */}
        <div>
          <h3 className="font-semibold mb-2">Stay in loop</h3>
          <p className="text-sm text-gray-600 mb-3">
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips.
          </p>
          <div className="flex items-center border rounded-lg p-2">
            <Mail className="text-gray-500" size={18} />
            <input
              type="email"
              placeholder="Your email"
              className="ml-2 flex-1 outline-none text-sm bg-transparent"
            />
            <ArrowRight className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t mt-6 pt-4 text-sm text-gray-500">
        <p>©2024 NYWNFT. All rights reserved.</p>
        <button className="bg-black text-white px-4 py-2 rounded-lg mt-3 md:mt-0">
          Raise a ticket
        </button>
      </div>
    </footer>
  );
};

export default Footer;
