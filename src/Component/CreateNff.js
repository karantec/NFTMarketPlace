import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CreateNFT = () => {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-semibold mb-6">Create your new masterpiece</h1>

      <div className="space-y-4">
        {/* Drop Option */}
        <Link
          to="/create-drop"
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 transition"
        >
          <div>
            <h2 className="text-lg font-medium">Drop</h2>
            <p className="text-sm text-gray-600">
              A drop is the release of a new project. This usually happens on a specified
              date and time. Items will be revealed after they have been purchased.
            </p>
          </div>
          <ArrowRight className="text-gray-500" />
        </Link>

        {/* Collection or NFT Option */}
        <Link
          to="/create-collection"
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 transition"
        >
          <div>
            <h2 className="text-lg font-medium">Collection or NFT</h2>
            <p className="text-sm text-gray-600">
              Create a new NFT collection or add an NFT to an existing one. Your items
              will display immediately. List for sale when you're ready.
            </p>
          </div>
          <ArrowRight className="text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

export default CreateNFT;
