import React from "react";
import { ImSpinner3 } from "react-icons/im";

function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center space-x-2 w-screen h-screen bg-black opacity-40 absolute inset-0 z-30">
      <div aria-label="Loading..." role="status">
        <span className="animate-spin block">
          <ImSpinner3 color="#fff" />
        </span>
      </div>
      <span className="text-sm font-medium text-gray-100 cursor-none">
        Loading...
      </span>
    </div>
  );
}

export default SpinnerLoader;
